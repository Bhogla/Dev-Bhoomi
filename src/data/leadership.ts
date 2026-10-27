// Leadership. Copy lives here, never in JSX. The turnover figure and the years
// are derived from company.ts (single source of truth), not restated by hand.
import { company, turnover } from "./company";

const latest = turnover[turnover.length - 1];

export const director = {
  name: "Dharmendra Singh Negi",
  honorific: "Mr.",
  role: "Director",
  company: "Dev Bhoomi Enterprises",
  image: {
    src: "/assets/leadership/dharmendra-negi-800.webp",
    srcSmall: "/assets/leadership/dharmendra-negi-480.webp",
    alt: "Mr. Dharmendra Singh Negi, Director of Dev Bhoomi Enterprises",
  },
  bio: [
    "Dharmendra Singh Negi is the driving force behind Dev Bhoomi Enterprises, bringing a decade of hands-on experience in solar energy across Uttarakhand. Under his leadership the company has grown from rooftop installations into a full solar business — designing and commissioning rooftop and ground-mounted plants for homes, businesses and industry, while supplying multi-brand panels, inverters and balance-of-system to installers and contractors.",
    `Known for his practical leadership and commitment to quality, he continues to drive reliable workmanship, efficient operations and dependable after-sales service — the foundation behind the company's growth to ₹${latest.crore} crore in FY ${latest.fy}.`,
  ],
  remit: "Solar project delivery & product quality",
  drives: ["Reliable installations", "Operational efficiency", "Customer satisfaction"],
} as const;

// Fact line, derived entirely from company.ts.
export const directorFact = `${company.yearsOperating} years in solar · ₹${latest.crore} Cr turnover FY ${latest.fy} · ${company.coverage}`;
