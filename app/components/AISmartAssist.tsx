"use client";

import { motion } from "framer-motion";
import { Clock, BarChart3, RefreshCw, Zap } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const aiFeatures = [
    {
        icon: Clock,
        title: "Morning walk",
        desc: "Suggests the best time to remind you.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: BarChart3,
        title: "Habit Priorities",
        desc: "Reorders habits on busy days.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: RefreshCw,
        title: "Routine Insights",
        desc: "Highlights what's working and what's slipping.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: Zap,
        title: "Recovery Suggestion",
        desc: "Helps you recover when you miss a day.",
        color: "bg-purple-100 text-purple-600",
    },
];

export default function AISmartAssist() {
    return (
        <section id="startups" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Left side - Text */}
                <div className="lg:w-1/2">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                            Smarter habits, less thinking
                        </span>
                        <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main leading-tight mb-6">
                            AI suggestions that
                            <br />
                            adjust to your day
                        </h2>
                        <p className="text-text-muted text-[15px] leading-relaxed mb-8 max-w-md">
                            Habitline learns your patterns and offers small, useful suggestions that help you stay consistent without guessing what to do next.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#333] transition-colors"
                        >
                            See how suggestions work
                        </a>
                    </motion.div>

                    {/* Feature cards */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12"
                    >
                        {aiFeatures.map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -2 }}
                                className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-2xl p-4 group cursor-default"
                            >
                                <div className={`w-10 h-10 rounded-xl ${feature.color} flex items-center justify-center mb-3`}>
                                    <feature.icon size={18} />
                                </div>
                                <h4 className="text-sm font-semibold text-text-main mb-1">{feature.title}</h4>
                                <p className="text-[12px] text-text-muted">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Right side - Phone mockup */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="lg:w-1/2 flex justify-center lg:justify-end"
                >
                    <div className="relative w-72 md:w-80">
                        <div className="bg-[#1D1D1F] rounded-[2.5rem] p-3 shadow-2xl">
                            <div className="bg-white rounded-[2rem] overflow-hidden">
                                {/* Status bar */}
                                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                    <span className="text-text-main text-[11px]">19:02</span>
                                    <div className="w-20 h-5 bg-black rounded-full" />
                                    <span className="text-text-main text-[11px]">📶🔋</span>
                                </div>
                                <div className="px-5 pb-6 pt-2 space-y-3">
                                    {/* AI badge */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-[10px]">✓</span>
                                        </div>
                                        <span className="text-[11px] text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-full">AI Assisted</span>
                                    </div>

                                    {/* Today&apos;s routine */}
                                    <div>
                                        <p className="text-[12px] font-semibold text-text-main mb-2">Today&apos;s routine</p>
                                        <p className="text-[10px] text-text-muted mb-3">AI has reordered your habits</p>
                                    </div>

                                    {/* Suggestion cards */}
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                                        <p className="text-[11px] font-medium text-text-main">Move drink water to 11:00 pm</p>
                                        <button className="mt-2 bg-green-500 text-white text-[10px] font-medium rounded-full px-3 py-1">
                                            Apply
                                        </button>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                                        <p className="text-[11px] font-medium text-text-main">Pair with &quot;phone off&quot; habit</p>
                                        <button className="mt-2 bg-blue-500 text-white text-[10px] font-medium rounded-full px-3 py-1">
                                            Try this week
                                        </button>
                                    </div>

                                    {/* Habits */}
                                    <div className="space-y-2 mt-2">
                                        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-lg p-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                                            <span className="text-[11px] font-medium">Morning stretch</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-lg p-2">
                                            <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                            <span className="text-[11px] font-medium">Focus block</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
