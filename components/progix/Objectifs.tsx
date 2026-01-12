"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users, Heart, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function Objectifs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const objectifs = [
        {
            icon: Heart,
            title: "Fidéliser les clients existants",
            description: "Créer une relation durable et personnalisée",
        },
        {
            icon: TrendingUp,
            title: "Augmenter la fréquence de visite",
            description: "Inciter les clients à revenir plus souvent",
        },
        {
            icon: Target,
            title: "Accroître le panier moyen",
            description: "Optimiser la valeur de chaque transaction",
        },
        {
            icon: MessageCircle,
            title: "Relation directe restaurant ↔ client",
            description: "Communication sans intermédiaire",
        },
        {
            icon: Users,
            title: "Centraliser la fidélisation",
            description: "Coupons, récompenses et communications unifiés",
        },
    ];

    return (
        <Section className="bg-slate-50 dark:bg-slate-900" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Contexte & Objectifs
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Un outil marketing stratégique, simple pour le restaurateur et engageant pour l'utilisateur
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectifs.map((obj, index) => (
                    <motion.div
                        key={obj.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                        <Card hover className="h-full">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6" style={{ backgroundColor: '#1d476020' }}>
                                <obj.icon className="w-8 h-8" style={{ color: '#1d4760' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{obj.title}</h3>
                            <p className="text-muted">{obj.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 text-center"
            >
                <div className="inline-block bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-8 py-6">
                    <p className="text-lg font-semibold">
                        📱 <span style={{ color: '#1d4760' }}>Plateformes :</span> Application mobile iOS & Android + Interface restaurant (back-office)
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
