"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, ShieldAlert, TrendingDown, Users } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Problem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const problems = [
        {
            icon: ShieldAlert,
            title: "Lack of Trust",
            description: "No verification of carriers or service providers",
        },
        {
            icon: AlertTriangle,
            title: "Compliance Gaps",
            description: "Regulatory requirements often overlooked or ignored",
        },
        {
            icon: TrendingDown,
            title: "Fragmented Services",
            description: "Disconnected platforms with inconsistent quality",
        },
        {
            icon: Users,
            title: "No Accountability",
            description: "Limited recourse for businesses and consumers",
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
                    The Problem
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    The current logistics market is plagued by fundamental challenges that
                    undermine trust and efficiency
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {problems.map((problem, index) => (
                    <motion.div
                        key={problem.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    >
                        <Card hover className="h-full">
                            <problem.icon className="w-12 h-12 text-accent mb-4" />
                            <h3 className="text-2xl font-semibold mb-3">{problem.title}</h3>
                            <p className="text-muted">{problem.description}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
