import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "PROGIX – Devis Application Mobile de Fidélisation",
    description: "Contrat et business plan pour le développement d'une application mobile de fidélisation pour restaurants. Solution complète iOS & Android avec back-office restaurateur.",
    keywords: ["PROGIX", "application mobile", "fidélisation", "restaurant", "iOS", "Android", "développement"],
};

export default function ProgixLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
