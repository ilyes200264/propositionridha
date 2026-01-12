"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, MousePointer, TrendingUp } from "lucide-react";
import { Section } from "../ui/Section";
import { DataTable } from "../ui/DataTable";
import { MetricCard } from "../ui/MetricCard";

export function AwarenessBudget() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const budgetData = [
        ["Meta Ads (Facebook / Instagram)", "800 $ / mois"],
        ["Google Display", "300 $ / mois"],
        ["LinkedIn Ads (B2B)", "400 $ / mois"],
        ["Total mensuel", "1 500 $ / mois"],
        ["Total Phase 1 (2 mois)", "3 000 $"],
    ];

    return (
        <Section className="bg-background" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Phase 1 – Awareness
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto mb-4"
                >
                    Faire comprendre iBox et installer la crédibilité
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-block bg-primary/10 px-6 py-3 rounded-xl"
                >
                    <p className="text-lg font-semibold">Durée : 2 mois</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-16"
            >
                <h3 className="text-3xl font-bold mb-8">Budget publicitaire</h3>
                <DataTable
                    headers={["Canal", "Budget"]}
                    rows={budgetData}
                />
            </motion.div>

            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Résultats attendus</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <MetricCard
                            icon={Eye}
                            value="250K–350K"
                            label="Impressions"
                            description="CPM moyen : 8–12 $"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <MetricCard
                            icon={MousePointer}
                            value="0.8%–1.2%"
                            label="CTR moyen"
                            description="Taux de clic attendu"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <MetricCard
                            icon={TrendingUp}
                            value="2K–3.5K"
                            label="Visiteurs qualifiés"
                            description="Trafic site estimé"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/10"
            >
                <h4 className="text-xl font-semibold mb-4">KPI clés à surveiller</h4>
                <ul className="grid md:grid-cols-3 gap-4 text-muted">
                    <li>• Temps sur page</li>
                    <li>• Scroll depth</li>
                    <li>• Pages vues</li>
                </ul>
                <p className="mt-4 text-sm text-muted italic">
                    Objectif : Début de confiance (pas encore conversion forte)
                </p>
            </motion.div>
        </Section>
    );
}
