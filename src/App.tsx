import { useEffect, useMemo, useState } from "react";
import { AdminPage } from "./components/AdminPage";
import { FeaturedProperties } from "./components/FeaturedProperties";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LeadPage } from "./components/LeadPage";
import { PropertyDetail } from "./components/PropertyDetail";
import { properties } from "./data/properties";
import type { BudgetId, LocationId, Property, PropertyType } from "./types/property";

const ADMIN_STORAGE_KEY = "transformers_marks_properties";
const ADMIN_SESSION_KEY = "transformers_marks_admin_session";
const ADMIN_PASSWORD = "admin123";

function loadProperties() {
  try {
    const stored = window.localStorage.getItem(ADMIN_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Property[]) : properties;
  } catch {
    return properties;
  }
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname + window.location.search);
  const [propertyList, setPropertyList] = useState<Property[]>(loadProperties);
  const [isAdminAuthed, setIsAdminAuthed] = useState(
    () => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true"
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedType, setSelectedType] = useState<PropertyType | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationId | null>(null);
  const [selectedBudget, setSelectedBudget] = useState<BudgetId | null>(null);

  useEffect(() => {
    function handlePopState() {
      setRoute(window.location.pathname + window.location.search);
      window.scrollTo({ top: 0 });
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    let ignore = false;

    async function loadApiProperties() {
      try {
        const response = await fetch("/api/properties");
        if (!response.ok) {
          return;
        }

        const apiProperties = (await response.json()) as Property[];
        if (!ignore && apiProperties.length > 0) {
          setPropertyList(apiProperties);
          window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(apiProperties));
        }
      } catch {
        // Keep local/default data when the API is not running.
      }
    }

    void loadApiProperties();

    return () => {
      ignore = true;
    };
  }, []);

  function navigate(path: string) {
    window.history.pushState({}, "", path);
    setRoute(window.location.pathname + window.location.search);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const routeUrl = useMemo(() => new URL(route, window.location.origin), [route]);
  const propertySlug = routeUrl.pathname.startsWith("/properties/")
    ? routeUrl.pathname.replace("/properties/", "").split("/")[0]
    : null;
  const leadPropertySlug = routeUrl.searchParams.get("property");
  const routeProperty = propertyList.find((property) => property.slug === propertySlug) ?? null;
  const leadProperty = propertyList.find((property) => property.slug === leadPropertySlug) ?? null;
  const isLeadRoute = routeUrl.pathname === "/lead";
  const isAdminRoute = routeUrl.pathname === "/admin";

  const visibleProperties = useMemo(() => {
    return propertyList.filter((property) => {
      if (selectedType && property.type !== selectedType) {
        return false;
      }

      if (selectedLocation && property.locationId !== selectedLocation) {
        return false;
      }

      if (selectedBudget && property.budget !== selectedBudget) {
        return false;
      }

      return true;
    });
  }, [propertyList, selectedBudget, selectedLocation, selectedType]);

  async function saveProperties(nextProperties: Property[]) {
    setPropertyList(nextProperties);
    window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(nextProperties));

    const response = await fetch("/api/properties", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": ADMIN_PASSWORD
      },
      body: JSON.stringify(nextProperties)
    });

    if (!response.ok) {
      throw new Error("Unable to save properties to API.");
    }
  }

  async function resetProperties() {
    try {
      const response = await fetch("/api/properties/reset", {
        method: "POST",
        headers: {
          "x-admin-password": ADMIN_PASSWORD
        }
      });

      if (response.ok) {
        const reloaded = await fetch("/api/properties");
        if (reloaded.ok) {
          const apiProperties = (await reloaded.json()) as Property[];
          setPropertyList(apiProperties);
          window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(apiProperties));
          return apiProperties;
        }
      }
    } catch {
      // Fall through to local reset.
    }

    setPropertyList(properties);
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
    return properties;
  }

  function handleSelectType(type: PropertyType) {
    setSelectedType(type);
    setSelectedLocation(null);
    setSelectedBudget(null);
    window.setTimeout(() => setCurrentStep(1), 300);
  }

  function handleSelectLocation(location: LocationId) {
    setSelectedLocation(location);
    setSelectedBudget(null);
    window.setTimeout(() => setCurrentStep(2), 300);
  }

  function handleSelectBudget(budget: BudgetId) {
    setSelectedBudget(budget);
    window.setTimeout(() => navigate("/lead"), 400);
  }

  function clearType() {
    setCurrentStep(0);
    setSelectedType(null);
    setSelectedLocation(null);
    setSelectedBudget(null);
  }

  function clearLocation() {
    setCurrentStep(1);
    setSelectedLocation(null);
    setSelectedBudget(null);
  }

  function clearBudget() {
    setCurrentStep(2);
    setSelectedBudget(null);
  }

  return (
    <div className="min-h-screen bg-background flex flex-col relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/hero-bg-DNGYIAIc.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          opacity: 0.45
        }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <Header />
      {isAdminRoute ? (
        <AdminPage
          isAuthed={isAdminAuthed}
          properties={propertyList}
          onLogin={() => {
            window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
            setIsAdminAuthed(true);
          }}
          onLogout={() => {
            window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
            setIsAdminAuthed(false);
          }}
          onSave={saveProperties}
          onReset={resetProperties}
          onBack={() => navigate("/")}
        />
      ) : isLeadRoute ? (
        <LeadPage
          selectedType={leadProperty?.type ?? selectedType}
          selectedLocation={leadProperty?.locationId ?? selectedLocation}
          selectedBudget={leadProperty?.budget ?? selectedBudget}
          propertyName={leadProperty?.name ?? null}
          onBack={() => navigate(leadProperty ? `/properties/${leadProperty.slug}` : "/")}
        />
      ) : routeProperty ? (
        <PropertyDetail
          property={routeProperty}
          onBack={() => navigate("/")}
          onEnquire={() => navigate(`/lead?property=${routeProperty.slug}`)}
        />
      ) : (
        <>
          <Hero
            currentStep={currentStep}
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            selectedBudget={selectedBudget}
            onSelectType={handleSelectType}
            onSelectLocation={handleSelectLocation}
            onSelectBudget={handleSelectBudget}
            onClearType={clearType}
            onClearLocation={clearLocation}
            onClearBudget={clearBudget}
          />
          <FeaturedProperties
            properties={visibleProperties}
            selectedType={selectedType}
            selectedLocation={selectedLocation}
            selectedBudget={selectedBudget}
            onSelectProperty={(property) => {
              navigate(`/properties/${property.slug}`);
            }}
          />
        </>
      )}
      <Footer />
    </div>
  );
}
