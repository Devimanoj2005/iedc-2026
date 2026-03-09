"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};


export default function HabitsShowcase() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Big text */}
            <div className="max-w-3xl mx-auto px-6 text-center mb-12">
                <motion.h2
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-[44px] font-bold tracking-tight text-text-main leading-tight"
                >
                    Build steady daily 🚴 habits with a
                    <br className="hidden md:block" />
                    layout that keeps your mornings,
                    <br className="hidden md:block" />
                    evenings, 🌅 and focus simple to follow.
                </motion.h2>
            </div>

            <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-text-muted text-sm mb-4"
            >
                Used by people to improve routines.
            </motion.p>

            {/* Tags */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-2 mb-16"
            >
                {["#Founders", "#Students", "#Busy parents", "#Remote teams"].map((tag) => (
                    <span
                        key={tag}
                        className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-main text-xs font-medium px-3.5 py-1.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </motion.div>


            {/* Rating */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mt-12"
            >
                <p className="text-sm text-text-muted">
                    <span className="text-yellow-500 mr-1">★</span>
                    4.7 rating (based on 125 reviews)
                </p>
            </motion.div>

            {/* Description + Download */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl mx-auto px-6 text-center mt-6"
            >
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                    Stay consistent with a system that fits into real life. Simple cards, clear routines, and gentle nudges help you build progress that lasts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="https://www.apple.com/in/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors"
                    >
                        <Apple size={16} />
                        Download for iPhone
                    </a>
                    <a
                        href="https://play.google.com/store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                        <Smartphone size={16} />
                        Get it on Android
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
