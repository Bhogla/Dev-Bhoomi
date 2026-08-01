import { company, positioning, capabilities } from "../data/company";
import { PanelMotif } from "./ui/PanelMotif";

/** Panel-cell motif appearance #3 of 3: low-opacity outline. */
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/*
        Hidden below md. At mobile widths this spans the full column and lands
        directly behind the logo — and the lockup contains its own panel array,
        so the two grids overlap and muddy the mark. From md up the footer is
        two columns and the motif sits clear, top-right of the contact block.
      */}
      <div className="pointer-events-none absolute -right-10 -top-6 hidden w-[420px] md:block md:w-[560px]">
        <PanelMotif outline />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
          <div>
            {/*
              Full lockup here — the footer is the one place with room for the
              complete signature. Panel blue (#2E86AB) on ink (#0A1B33) measures
              ~4.2:1, comfortably past the 3:1 floor for a graphic, so the
              artwork needs no light variant.
            */}
            <img
              src="/assets/logo/devbhoomi-logo.png"
              alt={company.name}
              width={560}
              height={316}
              className="h-16 w-auto md:h-20"
            />
            <p className="mt-4 max-w-[52ch] font-sans text-[14px] leading-relaxed text-slate-400">
              {positioning.mission}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {capabilities.map((c) => (
                <li key={c} className="font-sans text-[12px] text-slate-400">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 font-sans text-[13px] text-slate-400">
            <p className="text-white">{company.proprietor} · Proprietor</p>
            <p className="tnum">{company.phonePrimary}</p>
            <p className="break-all">{company.email}</p>
            <p className="leading-relaxed">
              {company.address.line1}, {company.address.landmark},<br />
              {company.address.city}, {company.address.state} – {company.address.pin}
            </p>
            <p className="tnum mt-2 text-slate-500">GSTIN {company.gstin}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[12px] text-slate-500">
            © {new Date().getFullYear()} {company.name}. {company.coverage}.
          </p>
          <p className="font-sans text-[12px] text-slate-500">{positioning.vision}</p>
        </div>
      </div>
    </footer>
  );
}
