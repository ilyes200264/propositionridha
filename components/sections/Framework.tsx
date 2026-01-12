"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Building2, Users, Home } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Framework() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const segments = [
        {
            icon: Building2,
            title: "Transporteurs agréés",
            subtitle: "B2B Supply",
            description: "Réseau de transporteurs vérifiés et certifiés",
        },
        {
            icon: Users,
            title: "Entreprises & compagnies",
            subtitle: "B2B Demand",
            description: "Compagnies de transport et entreprises clientes",
        },
        {
            icon: Home,
            title: "Particuliers & entreprises",
            subtitle: "B2C / B2B Light",
            description: "Services de déménagement professionnels",
        },
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
                    Hypothèses de base
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto mb-8"
                >
                    Cadre réaliste pour un lancement contrôlé
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mb-12"
            >
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="flex items-start gap-4">
                        <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Zone de lancement</h3>
                            <ul className="space-y-2 text-muted">
                                <li>• Local / régional (ville + périphérie)</li>
                                <li>• Pas de longue distance</li>
                                <li>• Marché test contrôlé</li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </motion.div>

            <div className="mb-12">
                <h3 className="text-3xl font-bold mb-8 text-center">Segments ciblés</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {segments.map((segment, index) => (
                        <motion.div
                            key={segment.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                        >
                            <Card hover className="h-full">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                                    <segment.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h4 className="text-xl font-bold mb-1">{segment.title}</h4>
                                <p className="text-sm text-primary font-medium mb-3">
                                    {segment.subtitle}
                                </p>
                                <p className="text-muted">{segment.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center"
            >
                <div className="inline-block bg-accent/10 border border-accent/20 rounded-2xl px-8 py-6">
                    <p className="text-lg">
                        👉 <span className="font-semibold">Le site + les ads</span> servent d'abord à{" "}
                        <span className="font-semibold text-primary">tester le marché</span>, pas à scaler immédiatement
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
