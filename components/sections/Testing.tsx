"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TestTube, Package, ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Testing() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const marketTests = [
        'Message "transport conforme" vs "optimisation capacité"',
        "B2B vs B2C priorité",
        "Déménagement : angle sécurité vs prix",
    ];

    const productTests = [
        "Formulaires courts vs longs",
        "Early access vs contact direct",
        "Page unique vs landing pages segmentées",
    ];

    return (
        <Section className="bg-gradient-to-br from-primary-dark to-slate-900 text-white" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Tests à prévoir
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-blue-100 max-w-3xl mx-auto"
                >
                    Validation obligatoire avant scale
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                        <TestTube className="w-12 h-12 text-blue-200 mb-6" />
                        <h3 className="text-2xl font-bold mb-6 text-white">Tests marché</h3>
                        <ul className="space-y-4">
                            {marketTests.map((test, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3 text-blue-100"
                                >
                                    <span className="text-blue-300 mt-1">•</span>
                                    <span>{test}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                        <Package className="w-12 h-12 text-blue-200 mb-6" />
                        <h3 className="text-2xl font-bold mb-6 text-white">Tests produit</h3>
                        <ul className="space-y-4">
                            {productTests.map((test, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                                    className="flex items-start gap-3 text-blue-100"
                                >
                                    <span className="text-blue-300 mt-1">•</span>
                                    <span>{test}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center"
            >
                <h3 className="text-3xl font-bold mb-8">Rôle du site web</h3>
                <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12">
                    <ul className="space-y-3 text-left text-blue-100">
                        <li className="flex items-center gap-3">
                            <span className="text-blue-300">✓</span>
                            <span>Expliquer le modèle clairement</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-300">✓</span>
                            <span>Filtrer les mauvais leads</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-300">✓</span>
                            <span>Rassurer (légal, conformité)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-blue-300">✓</span>
                            <span>Préparer le prospect avant contact</span>
                        </li>
                    </ul>
                    <p className="mt-6 text-xl font-semibold text-white">
                        👉 Moins de leads, mais <span className="text-blue-200">meilleurs leads</span>
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <a
                        href="mailto:contact@ibox.com"
                        className="inline-flex items-center gap-3 bg-white text-primary px-12 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                    >
                        Démarrer la stratégie
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </motion.div>
            </motion.div>
        </Section>
    );
}
