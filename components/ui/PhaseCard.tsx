interface PhaseCardProps {
    phase: string;
    title: string;
    duration: string;
    className?: string;
}

export function PhaseCard({ phase, title, duration, className = "" }: PhaseCardProps) {
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl p-6 border-2 border-primary/20 hover:border-primary transition-all hover:shadow-lg ${className}`}
        >
            <div className="text-sm font-semibold text-primary mb-2">{phase}</div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="text-sm text-muted font-mono">{duration}</div>
        </div>
    );
}
