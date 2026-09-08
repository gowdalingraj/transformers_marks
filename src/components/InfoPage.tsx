export function InfoPage({ page }: { page: "about" | "contact" }) {
  const email = import.meta.env.VITE_CONTACT_EMAIL;
  const phone = import.meta.env.VITE_CONTACT_PHONE;
  return <main className="info-page relative z-10 flex-1"><p className="property-kicker">Transformers Marks</p>
    <h1 className="property-hero-title">{page === "about" ? "Our Purpose. Your Address." : "Contact us"}</h1>
    {page === "about" ? <><p className="property-copy">Explore apartments, villas and plots in Bangalore. Find properties by location and budget, compare project details, and request a cost sheet for the homes that interest you.</p><a className="property-outline-button" href="/#properties">Explore properties</a></> : <><p className="property-copy">Looking for a property? Share your preferences with us.</p>{email && <p><a href={`mailto:${email}`}>{email}</a></p>}{phone && <p><a href={`tel:${phone}`}>{phone}</a></p>}<a className="property-outline-button" href="/lead">Enquire about a property</a></>}
  </main>;
}
