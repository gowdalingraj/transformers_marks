import { useMemo, useState } from "react";
import type { Property } from "../types/property";

type WhatsAppChatbotProps = {
  property: Property | null;
};

const fallbackNumber = "919999999999";
const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || fallbackNumber;

function makeWhatsAppUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function WhatsAppLogo() {
  return (
    <span className="assistant-orb"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 5C17 12 20 15 27 16C20 17 17 20 16 27C15 20 12 17 5 16C12 15 15 12 16 5Z" /></svg></span>
  );
}

export function WhatsAppChatbot({ property }: WhatsAppChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const messages = useMemo(() => {
    const propertyLine = property ? ` for ${property.name}` : "";

    return [
      {
        label: "Project details",
        message: `Hi, I want more details${propertyLine}.`
      },
      {
        label: "Price and availability",
        message: `Hi, please share price and availability${propertyLine}.`
      },
      {
        label: "Schedule visit",
        message: `Hi, I would like to schedule a site visit${propertyLine}.`
      }
    ];
  }, [property]);

  return (
    <div className="whatsapp-chatbot" aria-live="polite">
      {isOpen && (
        <section className="whatsapp-chatbot-panel" aria-label="WhatsApp chat options">
          <div className="whatsapp-chatbot-header">
            <span className="whatsapp-chatbot-avatar" aria-hidden="true">
              <WhatsAppLogo />
            </span>
            <div>
              <h2>Chat on WhatsApp</h2>
              <p>{property ? property.name : "Transformers Marks"}</p>
            </div>
          </div>
          <div className="whatsapp-chatbot-options">
            {messages.map((item) => (
              <a
                href={makeWhatsAppUrl(item.message)}
                key={item.label}
                rel="noreferrer"
                target="_blank"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>
      )}

      <button
        className="whatsapp-chatbot-button"
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span aria-hidden="true">
          <WhatsAppLogo />
        </span>
        <span>Chat</span>
      </button>
    </div>
  );
}
