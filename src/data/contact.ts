// Section 10 — contact.
// Button verb matches outcome: "Book a site survey" -> "Survey booked."

import { company } from "./company";

export const contactCopy = {
  heading: "Book a site survey",
  lede: "A survey is free and carries no obligation. We look at roof area, shading, your sanctioned load and past consumption, then size a system against it.",
  submitLabel: "Book a site survey",
  submittingLabel: "Booking…",
  successHeading: "Survey booked.",
  successBody: "We have your request. Someone will call you on the number you gave to fix a time.",
  successReset: "Book another",
} as const;

export type FieldName = "name" | "phone" | "location" | "interest" | "message";

export interface Field {
  name: FieldName;
  label: string;
  type: "text" | "tel" | "select" | "textarea";
  required: boolean;
  placeholder?: string;
  options?: string[];
  autoComplete?: string;
}

export const contactFields: Field[] = [
  { name: "name", label: "Name", type: "text", required: true, placeholder: "Your name", autoComplete: "name" },
  { name: "phone", label: "Phone", type: "tel", required: true, placeholder: "10-digit mobile", autoComplete: "tel" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "Town or district", autoComplete: "address-level2" },
  {
    name: "interest",
    label: "What do you need?",
    type: "select",
    required: true,
    options: ["Rooftop installation", "Ground-mounted plant", "Solar pump or fencing", "AMC or service", "Product supply (trade)"],
  },
  { name: "message", label: "Anything else", type: "textarea", required: false, placeholder: "Optional — roof type, load, timeline" },
];

const waDigits = company.phonePrimary.replace(/[^0-9]/g, "");

export const whatsApp = {
  href: `https://wa.me/${waDigits}?text=${encodeURIComponent("Hi Dev Bhoomi — I'd like to ask about solar.")}`,
  label: "Chat on WhatsApp",
};

export const mapQuery = encodeURIComponent(
  `${company.address.line1}, ${company.address.landmark}, ${company.address.city}, ${company.address.state} ${company.address.pin}`,
);

export const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
export const mapLinkHref = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
