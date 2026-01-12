"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Building2, Home } from "lucide-react";
import { Section } from "../ui/Section";
import { DataTable } from "../ui/DataTable";
import { MetricCard } from "../ui/MetricCard";

export function AcquisitionBudget() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const budgetData = [
        ["Meta Lead Ads", "1 200 $ / mois"],
        ["Google Search (intention forte)", "600 $ / mois"],
        ["Retargeting (Meta + Google)", "400 $ / mois"],
        ["Total mensuel", "2 200 $ / mois"],
        ["Total Phase 2 (3 mois)", "6 600 $"],
    ];

    const cplData = [
        ["Transporteurs", "15–25 $"],
        ["Entreprises B2B", "30–50 $"],
        ["Déménagement particuliers", "10–20 $"],
    ];

    return (
        <Section className="bg-gradient-to-br from-primary-dark to-primary text-white" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Phase 2 – Acquisition
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-blue-100 max-w-3xl mx-auto mb-4"
                >
                    Collecter des leads qualifiés et segmenter clairement
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="inline-block bg-white/10 px-6 py-3 rounded-xl"
                >
                    <p className="text-lg font-semibold">Durée : 2–3 mois</p>
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
                    className="[&_table]:bg-white/10 [&_table]:backdrop-blur-md [&_thead_tr]:bg-white/20 [&_tbody_tr]:border-white/10 [&_tbody_tr:hover]:bg-white/5"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-16"
            >
                <h3 className="text-3xl font-bold mb-8">Coûts par lead (CPL estimé)</h3>
                <DataTable
                    headers={["Segment", "CPL"]}
                    rows={cplData}
                    className="[&_table]:bg-white/10 [&_table]:backdrop-blur-md [&_thead_tr]:bg-white/20 [&_tbody_tr]:border-white/10 [&_tbody_tr:hover]:bg-white/5"
                />
            </motion.div>

            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Leads attendus / mois</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <Building2 className="w-12 h-12 text-blue-200 mb-4" />
                            <div className="text-4xl font-bold mb-2 font-mono">40–60</div>
                            <h4 className="text-lg font-semibold mb-1">Transporteurs</h4>
                            <p className="text-sm text-blue-100">Leads qualifiés</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <Users className="w-12 h-12 text-blue-200 mb-4" />
                            <div className="text-4xl font-bold mb-2 font-mono">20–30</div>
                            <h4 className="text-lg font-semibold mb-1">Entreprises</h4>
                            <p className="text-sm text-blue-100">Leads B2B</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <Home className="w-12 h-12 text-blue-200 mb-4" />
                            <div className="text-4xl font-bold mb-2 font-mono">50–70</div>
                            <h4 className="text-lg font-semibold mb-1">Déménagement</h4>
                            <p className="text-sm text-blue-100">Leads particuliers</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center"
            >
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-6">
                    <p className="text-2xl font-bold mb-2">110–160 leads / mois</p>
                    <p className="text-blue-100">330–480 leads sur 3 mois</p>
                </div>
            </motion.div>
        </Section>
    );
}
