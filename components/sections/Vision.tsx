"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Section } from "../ui/Section";

export function Vision() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <Section className="bg-gradient-to-br from-primary via-primary-dark to-slate-900 text-white" ref={ref}>
            <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-6xl font-bold mb-8"
                >
                    Building the Future of Logistics
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12"
                >
                    A regulated infrastructure where trust, compliance, and quality are
                    the foundation—not an afterthought
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mb-16"
                >
                    <h3 className="text-2xl font-semibold mb-6">Roadmap Highlights</h3>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">Phase 1</div>
                            <p className="text-blue-100">Carrier verification & platform launch</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">Phase 2</div>
                            <p className="text-blue-100">Business partnerships & scaling</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                            <div className="text-3xl font-bold mb-2">Phase 3</div>
                            <p className="text-blue-100">International expansion</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="space-y-6"
                >
                    <h3 className="text-3xl font-semibold mb-8">Let's Connect</h3>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:contact@ibox.com"
                            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            contact@ibox.com
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
                        >
                            <Phone className="w-5 h-5" />
                            Schedule a Call
                        </a>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-12 pt-8 border-t border-white/20"
                    >
                        <p className="text-blue-100 text-lg">
                            Ready to transform professional logistics?
                        </p>
                        <p className="text-2xl font-semibold mt-2 flex items-center justify-center gap-2">
                            Partner with iBox <ArrowRight className="w-6 h-6" />
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
}
