import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-border bg-background/50 backdrop-blur-sm p-8",
                hover && "transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-accent",
                className
            )}
        >
            {children}
        </div>
    );
}
