const inr = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const num = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

/** ₹ with Indian digit grouping (lakh/crore). */
export const rupees = (n: number) => `₹${inr.format(Math.round(n))}`;

/** Compact ₹ for large figures: 1,25,000 -> ₹1.25 L */
export function rupeesCompact(n: number) {
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(2)} Cr`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(2)} L`;
  return rupees(n);
}

export const units = (n: number) => num.format(Math.round(n));

export const years = (n: number) => (n <= 0 ? "—" : `${n.toFixed(1)} yrs`);
