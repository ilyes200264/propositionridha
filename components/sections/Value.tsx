"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Shield, TrendingUp } from "lucide-react";
import { Section } from "../ui/Section";

export function Value() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const metrics = [
        {
            icon: Shield,
            value: "100%",
            label: "Verified Carriers",
            description: "All participants fully licensed and insured",
        },
        {
            icon: TrendingUp,
            value: "3x",
            label: "Efficiency Gain",
            description: "Streamlined compliance reduces overhead",
        },
        {
            icon: BarChart3,
            value: "$50B+",
            label: "Market Opportunity",
            description: "Addressable logistics compliance market",
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
                    Value Proposition
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Measurable impact across the entire logistics value chain
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
                {metrics.map((metric, index) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                            <metric.icon className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-5xl md:text-6xl font-bold text-primary mb-3">
                            {metric.value}
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">{metric.label}</h3>
                        <p className="text-muted">{metric.description}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-20 max-w-4xl mx-auto"
            >
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
                        <h4 className="text-xl font-semibold mb-4">For Carriers</h4>
                        <p className="text-muted">
                            Access to verified business clients, built-in compliance support,
                            and professional tools to grow your business with confidence
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8 border border-accent/10">
                        <h4 className="text-xl font-semibold mb-4">For Businesses</h4>
                        <p className="text-muted">
                            Vetted carrier partners, regulatory peace of mind, transparent
                            pricing, and scalable logistics infrastructure
                        </p>
                    </div>
                </div>
            </motion.div>
        </Section>
    );
}
