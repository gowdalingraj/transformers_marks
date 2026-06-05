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
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M16.04 3.2A12.7 12.7 0 0 0 5.1 22.35L3.8 28.8l6.6-1.52A12.7 12.7 0 1 0 16.04 3.2Zm0 22.98c-1.82 0-3.6-.49-5.15-1.43l-.36-.22-3.9.9.78-3.82-.24-.39a10.26 10.26 0 1 1 8.87 4.96Zm5.88-7.7c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.52-.16-.74.16-.22.32-.84 1.04-1.03 1.25-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.18-.32-.02-.5.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.21 2.28 3.48 5.52 4.88.77.33 1.38.53 1.85.68.78.25 1.49.21 2.05.13.63-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z"
      />
    </svg>
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
