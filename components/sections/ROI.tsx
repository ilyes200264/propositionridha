"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, DollarSign, Target } from "lucide-react";
import { Section } from "../ui/Section";
import { MetricCard } from "../ui/MetricCard";

export function ROI() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    ROI – Année 1
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Scénario prudent sur 6–8 mois
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <MetricCard
                        icon={DollarSign}
                        value="~11 500 $"
                        label="Investissement marketing total"
                        description="Phase 1 (3K) + Phase 2 (6.6K) + Ajustements (2K)"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <MetricCard
                        icon={TrendingUp}
                        value="~30 000 $"
                        label="Revenus sur 6 mois"
                        description="5 000 $ × 6 mois d'activation"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <MetricCard
                        icon={Target}
                        value="×2.5"
                        label="ROI brut"
                        description="Sans compter la valeur réseau long terme"
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl border-2 border-primary/20">
                    <h3 className="text-2xl font-bold mb-6 text-center">Calcul détaillé</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                            <span className="text-muted">Phase 1 – Awareness</span>
                            <span className="font-mono font-semibold">3 000 $</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                            <span className="text-muted">Phase 2 – Acquisition</span>
                            <span className="font-mono font-semibold">6 600 $</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                            <span className="text-muted">Retargeting & ajustements</span>
                            <span className="font-mono font-semibold">2 000 $</span>
                        </div>
                        <div className="flex justify-between items-center py-4 bg-primary/5 px-4 rounded-xl">
                            <span className="font-semibold text-lg">Total investissement</span>
                            <span className="font-mono font-bold text-2xl text-primary">11 500 $</span>
                        </div>
                        <div className="flex justify-between items-center py-4 bg-accent/5 px-4 rounded-xl mt-6">
                            <span className="font-semibold text-lg">Revenus 6 mois</span>
                            <span className="font-mono font-bold text-2xl text-accent">30 000 $</span>
                        </div>
                        <div className="flex justify-between items-center py-6 bg-gradient-to-r from-primary to-accent text-white px-6 rounded-xl mt-6">
                            <span className="font-bold text-xl">ROI</span>
                            <span className="font-mono font-bold text-4xl">×2.5</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-block bg-accent/10 border border-accent/20 rounded-2xl px-8 py-6">
                    <p className="text-lg">
                        💡 <span className="font-semibold">Valeur long terme non comptée :</span> Effet réseau,
                        rétention clients, et croissance organique
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
