"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, UserCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";

export function Audiences() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const audiences = [
        {
            icon: UserCheck,
            title: "Verified Carriers",
            subtitle: "Licensed & Insured",
            benefits: [
                "Access to quality business clients",
                "Compliance support and tools",
                "Professional credibility",
                "Growth opportunities",
            ],
        },
        {
            icon: Building2,
            title: "Businesses",
            subtitle: "Transport Companies",
            benefits: [
                "Vetted carrier partners",
                "Regulatory peace of mind",
                "Transparent pricing",
                "Scalable logistics",
            ],
        },
        {
            icon: Users,
            title: "End Users",
            subtitle: "Individuals & Companies",
            benefits: [
                "Professional service quality",
                "Insurance protection",
                "Verified providers",
                "Reliable execution",
            ],
        },
    ];

    return (
        <Section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800" ref={ref}>
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Target Audiences
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl text-muted max-w-3xl mx-auto"
                >
                    Creating value for every participant in the logistics ecosystem
                </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {audiences.map((audience, index) => (
                    <motion.div
                        key={audience.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                    >
                        <Card hover className="h-full">
                            <div className="flex flex-col h-full">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6">
                                    <audience.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{audience.title}</h3>
                                <p className="text-sm text-primary font-medium mb-6">
                                    {audience.subtitle}
                                </p>
                                <ul className="space-y-3 flex-1">
                                    {audience.benefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-2">
                                            <span className="text-accent mt-1">•</span>
                                            <span className="text-muted">{benefit}</span>
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
