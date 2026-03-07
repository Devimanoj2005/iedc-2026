"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const tabs = [
    {
        id: "professionals",
        label: "Professionals",
        description: "For anyone handling long workdays, shifting priorities, and tight deadlines.",
        weeklyData: [75, 60, 85, 70, 90, 55, 80],
    },
    {
        id: "students",
        label: "Students",
        description: "Stay focused on your studies with structured routines that adapt to exam schedules.",
        weeklyData: [60, 80, 70, 85, 65, 90, 75],
    },
    {
        id: "remote",
        label: "Remote workers",
        description: "Create boundaries between work and life with habit blocks that keep you grounded.",
        weeklyData: [80, 70, 75, 85, 90, 60, 70],
    },
    {
        id: "parents",
        label: "Busy parents",
        description: "Squeeze in self-care between school runs and deadlines with flexible routines.",
        weeklyData: [55, 75, 60, 80, 70, 85, 65],
    },
];

export default function UseCaseTabs() {
    const [activeTab, setActiveTab] = useState("professionals");
    const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

    return (
        <section id="use-case" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                    Fits every lifestyle
                </span>
                <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-4">
                    Adapted for the way you
                    <br />
                    live and work
                </h2>
            </motion.div>

            {/* Tab buttons */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-2 mb-12"
            >
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                            ? "bg-[#1D1D1F] text-white"
                            : "bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl text-text-muted hover:text-text-main border border-border"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </motion.div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-3xl p-8">
                        <p className="text-text-main text-sm leading-relaxed mb-6">{currentTab.description}</p>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-text-main text-sm font-medium">Weekly consistency</span>
                        </div>
                        {/* Bar chart */}
                        <div className="flex items-end gap-2 h-24 mt-4">
                            {currentTab.weeklyData.map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${value}%` }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="flex-1 bg-primary rounded-t-lg"
                                />
                            ))}
                        </div>
                        <div className="flex justify-between mt-2">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                                <span key={d} className="text-[10px] text-text-muted flex-1 text-center">{d}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-text-muted text-sm mt-8"
            >
                And for every kind of daily rhythm
            </motion.p>
        </section>
    );
}
