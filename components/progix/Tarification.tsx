"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Calendar, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { DataTable } from "@/components/ui/DataTable";
import { MetricCard } from "@/components/ui/MetricCard";

export function Tarification() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const planningData = [
        ["Phase 1", "Analyse & conception", "2 semaines"],
        ["Phase 2", "Design & UX", "2 semaines"],
        ["Phase 3", "Développement", "6 à 8 semaines"],
        ["Phase 4", "Tests & ajustements", "2 semaines"],
        ["Phase 5", "Mise en production", "1 semaine"],
    ];

    const inclus = [
        "Développement complet de l'application",
        "Design UX/UI professionnel",
        "Backend & base de données sécurisés",
        "Tableau de bord restaurateur",
        "Mise en ligne (iOS & Android)",
        "Support & maintenance de base",
        "Conseils stratégiques business & marketing",
    ];

    return (
        <Section className="text-white" style={{ backgroundColor: '#1d4760' }} ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Tarification & Planning
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <DollarSign className="w-12 h-12 text-pink-200 mb-4" />
                        <div className="text-5xl font-bold mb-2 font-mono">3 400 €</div>
                        <p className="text-purple-100">TTC - Montant total</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <Calendar className="w-12 h-12 text-pink-200 mb-4" />
                        <div className="text-5xl font-bold mb-2 font-mono">283 €</div>
                        <p className="text-purple-100">Par mois (12 mois)</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <CheckCircle className="w-12 h-12 text-pink-200 mb-4" />
                        <div className="text-3xl font-bold mb-2">Aucun frais caché</div>
                        <p className="text-purple-100">Support inclus</p>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-16"
            >
                <h3 className="text-3xl font-bold mb-8 text-center">Planning prévisionnel</h3>
                <DataTable
                    headers={["Phase", "Description", "Durée"]}
                    rows={planningData}
                    className="[&_table]:bg-white/10 [&_table]:backdrop-blur-md [&_thead_tr]:bg-white/20 [&_tbody_tr]:border-white/10 [&_tbody_tr:hover]:bg-white/5"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                <h3 className="text-3xl font-bold mb-8 text-center">Ce qui est inclus</h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {inclus.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
                            className="flex items-start gap-3 bg-white/5 rounded-lg p-4"
                        >
                            <CheckCircle className="w-5 h-5 text-pink-300 flex-shrink-0 mt-0.5" />
                            <span className="text-purple-100">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </Section>
    );
}
