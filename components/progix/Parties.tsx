"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Parties() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section className="bg-background" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Parties au contrat
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <Card className="h-full bg-slate-50 dark:bg-slate-800">
                        <Building2 className="w-12 h-12 mb-6" style={{ color: '#1d4760' }} />
                        <h3 className="text-2xl font-bold mb-4">Prestataire</h3>
                        <div className="space-y-3 text-muted">
                            <p className="text-2xl font-bold" style={{ color: '#1d4760' }}>PROGIX</p>
                            <p>Société spécialisée en développement d'applications web et mobiles sur mesure</p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                <p className="font-semibold">Représentée par :</p>
                                <p>Ilyes Ghorieb</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold mb-2">Activités :</p>
                                <ul className="space-y-1 text-sm">
                                    <li>• Développement logiciel</li>
                                    <li>• Applications mobiles</li>
                                    <li>• Solutions SaaS</li>
                                    <li>• Stratégie digitale</li>
                                </ul>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <Card className="h-full bg-slate-50 dark:bg-slate-800">
                        <User className="w-12 h-12 mb-6" style={{ color: '#1d4760' }} />
                        <h3 className="text-2xl font-bold mb-4">Client</h3>
                        <div className="space-y-3 text-muted">
                            <p className="text-lg font-semibold">[Nom de la société cliente]</p>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                                <p className="font-semibold">Secteur :</p>
                                <p>Restauration</p>
                            </div>
                            <div className="pt-2">
                                <p className="font-semibold">Représentée par :</p>
                                <p>[Nom du représentant]</p>
                            </div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
}
