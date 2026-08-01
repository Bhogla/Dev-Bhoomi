import { AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Amber [CONFIRM] marker for any value the client has not verified.
 * Deliberately loud — an unconfirmed figure must be impossible to ship by accident.
 */
export function ConfirmBadge({
  className,
  label = "CONFIRM",
  title = "Unverified — awaiting client confirmation. Not a fact.",
}: {
  className?: string;
  label?: string;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-solar-amber-deep/40 bg-solar-amber/15",
        "px-1.5 py-0.5 align-middle font-sans text-[10px] font-bold uppercase tracking-wider text-solar-amber-deep",
        className,
      )}
    >
      <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden="true" />
      [{label}]
    </span>
  );
}

/** Block-level variant for whole sections resting on unverified numbers. */
export function ConfirmNotice({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-start gap-2 rounded-xl border border-solar-amber-deep/40 bg-solar-amber/12",
        "px-4 py-3 font-sans text-[12px] leading-relaxed text-solar-amber-deep",
        className,
      )}
    >
      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}
