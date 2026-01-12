"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Home, DollarSign } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Revenue() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const conversionData = [
        { segment: "Transporteurs activés", rate: "20–30 %" },
        { segment: "Entreprises actives", rate: "15–25 %" },
        { segment: "Déménagement", rate: "10–20 %" },
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
                    Phase 3 – Activation & Revenus
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Premiers revenus et validation du modèle
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-16"
            >
                <h3 className="text-3xl font-bold mb-8">Hypothèses de conversion (prudentes)</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {conversionData.map((item, index) => (
                        <motion.div
                            key={item.segment}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        >
                            <Card className="text-center">
                                <div className="text-3xl font-bold text-primary mb-2 font-mono">
                                    {item.rate}
                                </div>
                                <p className="text-muted">{item.segment}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mt-8 text-center text-muted"
                >
                    <p>Sur 400 leads : ~80–120 transporteurs | ~30–50 entreprises | ~40–60 déménagements</p>
                </motion.div>
            </motion.div>

            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Modèle de revenus</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <Card className="h-full bg-gradient-to-br from-primary/5 to-accent/5">
                            <Truck className="w-12 h-12 text-primary mb-4" />
                            <h4 className="text-2xl font-bold mb-4">Transport & B2B</h4>
                            <div className="space-y-2 text-muted mb-6">
                                <p>• Commission iBox : <span className="font-semibold">8–15 %</span></p>
                                <p>• Ticket moyen : <span className="font-semibold">250–600 $</span></p>
                                <p>• 100 opérations / mois</p>
                                <p>• Ticket moyen : 350 $</p>
                                <p>• Commission : 10 %</p>
                            </div>
                            <div className="bg-primary/10 rounded-xl p-4 border border-primary/20">
                                <p className="text-sm text-muted mb-1">Revenu mensuel brut</p>
                                <p className="text-3xl font-bold text-primary font-mono">~3 500 $</p>
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.9, duration: 0.6 }}
                    >
                        <Card className="h-full bg-gradient-to-br from-accent/5 to-primary/5">
                            <Home className="w-12 h-12 text-accent mb-4" />
                            <h4 className="text-2xl font-bold mb-4">Déménagement</h4>
                            <div className="space-y-2 text-muted mb-6">
                                <p>• Ticket moyen : <span className="font-semibold">800–1 500 $</span></p>
                                <p>• Commission : <span className="font-semibold">10–12 %</span></p>
                                <p>• 20 déménagements / mois</p>
                                <p>• Ticket : 1 000 $</p>
                                <p>• Commission : 10 %</p>
                            </div>
                            <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                                <p className="text-sm text-muted mb-1">Revenu mensuel</p>
                                <p className="text-3xl font-bold text-accent font-mono">~2 000 $</p>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="text-center"
            >
                <div className="inline-block bg-gradient-to-r from-primary to-accent text-white rounded-2xl px-12 py-8">
                    <DollarSign className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg mb-2">Revenu mensuel potentiel Phase 3</p>
                    <p className="text-5xl font-bold font-mono">5 000–6 000 $</p>
                </div>
            </motion.div>
        </Section>
    );
}
