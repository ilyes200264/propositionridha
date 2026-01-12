import { ProgixHero } from "@/components/progix/ProgixHero";
import { Parties } from "@/components/progix/Parties";
import { Objectifs } from "@/components/progix/Objectifs";
import { Fonctionnalites } from "@/components/progix/Fonctionnalites";
import { Tarification } from "@/components/progix/Tarification";

export default function ProgixPage() {
    return (
        <main className="relative">
            <ProgixHero />
            <Parties />
            <Objectifs />
            <Fonctionnalites />
            <Tarification />
        </main>
    );
}
