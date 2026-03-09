import { twMerge } from "tailwind-merge";
import type { ReactNode } from "react";

interface LiquidGlassButton {
  className?: string;
  children: ReactNode;
}

export const LiquidGlassButton = ({
  className = "",
  children,
}: LiquidGlassButton) => {
  return (
    <button
      className={twMerge(
        `inline-flex items-center justify-center align-middle select-none
              font-sans font-medium text-center px-3 py-1 text-foreground text-sm rounded-full
              bg-white/2.5 dark:bg-white/8 border border-border dark:border-white/15 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 dark:hover:bg-white/15 transition-all duration-300
              before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none
              after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased`,
        className,
      )}
    >
      {children}
    </button>
  );
};
