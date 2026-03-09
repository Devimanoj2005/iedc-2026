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
                    className="text-4xl md:text-[36px] font-black tracking- text-text-main leading-[1.1] font-outfit"
                >
                    Empowering students to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF4D00]">innovate</span>💡 build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A00] to-[#FF4D00]">startups</span> and solve real-world problems through technology and creativity.
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
                Powered by student innovators, mentors, and entrepreneurs.
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
                {["#Innovators", "#StudentStartups", "#Makers", "#Entrepreneurs", "#Builders"].map((tag) => (
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
                    ⭐ Powered by Kerala Startup Mission ecosystem
                </p>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl mx-auto px-6 text-center mt-6"
            >
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                    IEDC Bootcamp SJCET is a hub where students transform ideas into impactful innovations through mentorship, collaboration, workshops, and startup incubation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="https://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors"
                    >
                        → Join IEDC
                    </a>
                    <a
                        href="https://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                        → Discover Innovations
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
