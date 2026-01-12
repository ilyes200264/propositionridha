import { LucideIcon } from "lucide-react";

interface MetricCardProps {
    icon?: LucideIcon;
    value: string | number;
    label: string;
    description?: string;
    className?: string;
}

export function MetricCard({
    icon: Icon,
    value,
    label,
    description,
    className = "",
}: MetricCardProps) {
    return (
        <div
            className={`bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-primary/10 ${className}`}
        >
            {Icon && (
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                </div>
            )}
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-mono">
                {value}
            </div>
            <h3 className="text-lg font-semibold mb-1">{label}</h3>
            {description && <p className="text-sm text-muted">{description}</p>}
        </div>
    );
}
