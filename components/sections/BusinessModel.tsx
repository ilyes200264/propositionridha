"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Section } from "../ui/Section";

export function BusinessModel() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        { title: "Carrier Verification", description: "License, insurance, background checks" },
        { title: "Platform Access", description: "Verified carriers join the network" },
        { title: "Business Matching", description: "Connect with qualified clients" },
        { title: "Service Delivery", description: "Compliant, professional execution" },
        { title: "Quality Assurance", description: "Ongoing monitoring and support" },
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
                    How It Works
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    A regulated infrastructure built on trust, compliance, and quality
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        className="flex items-start gap-6 mb-8 last:mb-0"
                    >
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                                {index + 1}
                            </div>
                        </div>
                        <div className="flex-1 pt-2">
                            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted text-lg">{step.description}</p>
                        </div>
                        {index < steps.length - 1 && (
                            <ArrowRight className="flex-shrink-0 w-6 h-6 text-muted mt-3 hidden md:block" />
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-16 text-center"
            >
                <div className="inline-block bg-accent/10 border border-accent/20 rounded-2xl px-8 py-6">
                    <p className="text-lg text-foreground">
                        <span className="font-semibold">Revenue Model:</span> Platform fees on completed transactions,
                        subscription tiers for premium features, and compliance certification services
                    </p>
                </div>
            </motion.div>
        </Section>
    );
}
