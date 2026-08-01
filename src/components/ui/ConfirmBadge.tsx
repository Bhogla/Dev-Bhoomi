import { AlertTriangle } from "lucide-react";
import { cn } from "../../lib/utils";

/** Block-level notice for whole sections resting on unverified numbers. */
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
