import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, id, style }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        style={style}
        className={cn(
          "min-h-screen w-full flex items-center justify-center px-6 md:px-12 lg:px-24",
          className
        )}
      >
        <div className="max-w-7xl w-full">{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";
