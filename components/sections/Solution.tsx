"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Shield, Award } from "lucide-react";
import { Section } from "../ui/Section";

export function Solution() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const principles = [
        {
            icon: Shield,
            title: "Verification",
            description: "All carriers licensed, insured, and thoroughly vetted",
        },
        {
            icon: CheckCircle2,
            title: "Compliance",
            description: "Built-in regulatory adherence and quality standards",
        },
        {
            icon: Award,
            title: "Quality",
            description: "Professional service delivery with accountability",
        },
    ];

    return (
        <Section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="text-center mb-16" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    The Solution
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="inline-block bg-primary text-white px-8 py-4 rounded-2xl mb-8"
                >
                    <p className="text-2xl md:text-3xl font-semibold">
                        Not a marketplace, an infrastructure
                    </p>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    iBox is a regulated logistics infrastructure that connects verified
                    carriers, transport companies, businesses, and individuals for
                    compliant transport, professional moving, and controlled storage
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
                {principles.map((principle, index) => (
                    <motion.div
                        key={principle.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15, duration: 0.6 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                            <principle.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold mb-3">{principle.title}</h3>
                        <p className="text-muted">{principle.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
