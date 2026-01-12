"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Target, Zap } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Positioning() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const advantages = [
        {
            icon: Target,
            title: "Strategic Positioning",
            description: "Professional B2B logistics infrastructure, not consumer marketplace",
        },
        {
            icon: TrendingUp,
            title: "Market Opportunity",
            description: "Multi-billion dollar logistics sector seeking compliance solutions",
        },
        {
            icon: Zap,
            title: "Competitive Edge",
            description: "Regulatory compliance built-in, not bolted-on",
        },
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
                    Market Positioning
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-blue-100 max-w-3xl mx-auto"
                >
                    Positioned at the intersection of logistics, compliance, and technology
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {advantages.map((advantage, index) => (
                    <motion.div
                        key={advantage.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                    >
                        <Card className="bg-white/10 backdrop-blur-md border-white/20 h-full">
                            <advantage.icon className="w-12 h-12 text-blue-200 mb-4" />
                            <h3 className="text-2xl font-semibold mb-3 text-white">
                                {advantage.title}
                            </h3>
                            <p className="text-blue-100">{advantage.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
