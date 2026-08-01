import { Phone } from "lucide-react";

/**
 * Floating click-to-call button. Matches WhatsAppFloat exactly (size, shape,
 * shadow, ink surface) so the two read as a set — but anchored to the opposite
 * bottom corner: this sits bottom-LEFT, the chat button bottom-RIGHT, each the
 * same distance from its edge (bottom-5 / md:bottom-8) so they never overlap.
 */
export function CallFloat() {
  return (
    <a
      href="tel:+917818806374"
      aria-label="Call Dev Bhoomi Enterprises"
      className="group fixed bottom-5 left-5 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-ink p-4 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-transform hover:scale-105 md:bottom-8 md:left-8"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />

      {/* Hover label, sits to the right so it never runs off the left edge. */}
      <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-[12px] font-semibold text-white opacity-0 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-opacity duration-200 group-hover:opacity-100">
        Call us
      </span>
    </a>
  );
}
