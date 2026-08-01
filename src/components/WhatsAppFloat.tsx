import { MessageCircle } from "lucide-react";
import { whatsApp } from "../data/contact";

/** Floating WhatsApp entry point. Neutral surface — not part of the amber budget. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsApp.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={whatsApp.label}
      className="fixed bottom-5 right-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-ink p-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
