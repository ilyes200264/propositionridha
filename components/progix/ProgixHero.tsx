"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function ProgixHero() {
    return (
        <Section className="relative" style={{ backgroundColor: '#1d4760' }}>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center text-white"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-6"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                        PROGIX
                    </h1>
                    <div className="h-1 w-24 bg-white mx-auto rounded-full" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-3xl md:text-4xl font-semibold mb-6"
                >
                    Devis – Contrat & Business Plan
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto"
                >
                    Application Mobile de Fidélisation pour Restaurants
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-16"
                >
                    <ChevronDown className="w-8 h-8 mx-auto animate-bounce" />
                </motion.div>
            </motion.div>
        </Section>
    );
}
