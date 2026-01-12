"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Truck, Home, Package } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Solutions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const solutions = [
        {
            icon: Truck,
            title: "Transport",
            subtitle: "Compliant B2B Logistics",
            features: [
                "Verified carrier network",
                "Real-time tracking",
                "Insurance coverage",
                "Regulatory compliance",
            ],
        },
        {
            icon: Home,
            title: "Moving",
            subtitle: "Professional Relocation",
            features: [
                "Licensed moving companies",
                "Residential & commercial",
                "Quality guarantees",
                "Damage protection",
            ],
        },
        {
            icon: Package,
            title: "Storage",
            subtitle: "Controlled Infrastructure",
            features: [
                "Secure facilities",
                "Climate control options",
                "24/7 access management",
                "Inventory tracking",
            ],
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
                    Three Core Solutions
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Comprehensive logistics services built on a foundation of trust and compliance
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                    <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                    >
                        <Card hover className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                                    <solution.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold mb-2">{solution.title}</h3>
                                <p className="text-lg text-accent mb-6">{solution.subtitle}</p>
                                <ul className="space-y-3 flex-1">
                                    {solution.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2">
                                            <span className="text-primary mt-1">✓</span>
                                            <span className="text-muted">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
