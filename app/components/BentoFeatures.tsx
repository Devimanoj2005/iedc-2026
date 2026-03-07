"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export default function BentoFeatures() {
    return (
        <section id="features" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            {/* Header */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4"
            >
                <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                    Habits with structure
                </span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                <motion.h2
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main leading-tight max-w-lg"
                >
                    A layout that keeps
                    <br />
                    your day clear.
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-text-muted text-[15px] max-w-sm leading-relaxed"
                >
                    Habitline brings clarity to your routines with clean cards, realistic progress tracking, and guidance that adapts to your day.
                </motion.p>
            </div>

            {/* Bento Grid */}
            <motion.div
                variants={stagger}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {/* Flexible streak rules */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-3xl p-8 relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold text-text-main mb-2">Flexible streak rules</h3>
                    <p className="text-text-muted text-sm mb-8 max-w-xs">
                        Traditional habit trackers are too rigid. Miss one day and your 50-day streak is gone forever.
                    </p>

                    {/* Streak visual */}
                    <div className="flex flex-col items-center mt-4">
                        <div className="text-6xl mb-3">🔥</div>
                        <p className="text-2xl font-bold text-text-main">28 Day Streak Active</p>
                        <p className="text-text-muted text-sm mt-1">Build honest streaks that reflect real commitment</p>
                    </div>

                    {/* Calendar dots */}
                    <div className="flex items-center justify-center gap-1 mt-6 mb-6">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                            <div key={day} className="flex flex-col items-center gap-1">
                                <span className="text-[10px] text-text-muted">{day}</span>
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] ${i < 5 ? "bg-green-500 text-white" : i === 5 ? "bg-yellow-400 text-white" : "bg-gray-200"
                                    }`}>
                                    {i < 6 ? "✓" : ""}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Streak options */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-medium">
                            <span className="w-2 h-2 bg-blue-500 rounded-full" />
                            Pause Streak Option
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-medium">
                            <span className="w-2 h-2 bg-red-500 rounded-full" />
                            Travel Mode Active
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white border border-border rounded-full px-3 py-1.5 text-xs font-medium">
                            <span className="w-2 h-2 bg-green-500 rounded-full" />
                            30 min flexibility
                        </span>
                    </div>
                </motion.div>

                {/* Smart daily planner */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="bg-[#FF6B4A] rounded-3xl p-8 text-white relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold mb-2">Smart daily planner</h3>
                    <p className="text-white/80 text-sm mb-6 max-w-xs">
                        A simple view that shows only the habits that match your current time of day.
                    </p>

                    {/* Planner card */}
                    <div className="bg-white rounded-2xl p-5 text-text-main">
                        <div className="flex items-center justify-between mb-1">
                            <div>
                                <h4 className="font-bold text-[15px]">Good Morning!</h4>
                                <p className="text-text-muted text-[11px]">Tuesday, 25 Nov</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[11px] text-text-muted">15%</p>
                                <p className="text-[10px] text-text-muted">Completion</p>
                            </div>
                        </div>

                        <div className="space-y-2 mt-4">
                            {[
                                { time: "07:30 AM", name: "Morning walk", duration: "15 minutes", color: "bg-green-500" },
                                { time: "09:00 AM", name: "Drink 3 glasses of water", duration: "Before 11:00 AM", color: "bg-orange-500" },
                                { time: "10:00 AM", name: "Deep work session", duration: "60 minutes", color: "bg-blue-500" },
                                { time: "11:30 AM", name: "Read 10 pages", duration: "30 minutes", color: "bg-purple-500" },
                            ].map((habit, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="text-[10px] text-text-muted w-14 shrink-0">{habit.time}</span>
                                    <div className={`flex-1 ${habit.color} rounded-lg px-3 py-2 flex items-center justify-between`}>
                                        <span className="text-white text-[12px] font-medium">{habit.name}</span>
                                        <span className="text-white/80 text-[10px]">{habit.duration}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Routine stacks — full width */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="bg-[#1D1D1F] rounded-3xl p-8 text-white md:col-span-2 relative overflow-hidden"
                >
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-xl font-bold mb-2">Routine stacks</h3>
                            <p className="text-gray-400 text-sm mb-6 max-w-sm">
                                Group habits into simple blocks so your day feels organized instead of scattered.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-white text-[#1D1D1F] rounded-full px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Start your routine now
                            </a>
                            <p className="text-gray-500 text-[11px] mt-8">
                                *Simple blocks help you stay on track without thinking.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            {/* Phone mockup showing routine blocks */}
                            <div className="bg-[#2C2C2E] rounded-2xl p-4 max-w-xs mx-auto md:mx-0 md:ml-auto">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-[11px] text-gray-400">Mon, 07:32</p>
                                    <span className="text-[11px] text-gray-400">📶🔋</span>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <p className="text-sm font-semibold">Today&apos;s routine</p>
                                    <span className="text-[9px] bg-green-600 text-white rounded-full px-2 py-0.5">4 active stacks</span>
                                </div>
                                {/* Routine blocks */}
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        { name: "Morning Start", habits: "3 habits", color: "bg-green-600/20 border-green-600/30", badge: "bg-green-600" },
                                        { name: "Focus Block", habits: "3 habits", color: "bg-blue-600/20 border-blue-600/30", badge: "bg-blue-600" },
                                        { name: "Weekend Prep", habits: "2 habits", color: "bg-red-500/20 border-red-500/30", badge: "bg-red-500" },
                                        { name: "Evening Reset", habits: "2 habits", color: "bg-red-500/20 border-red-500/30", badge: "bg-red-500" },
                                    ].map((stack, i) => (
                                        <div key={i} className={`${stack.color} border rounded-xl px-3 py-2.5`}>
                                            <span className={`text-[8px] ${stack.badge} text-white rounded-full px-1.5 py-0.5`}>
                                                {stack.habits}
                                            </span>
                                            <p className="text-white text-[11px] font-medium mt-1">{stack.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Weekly reflection */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="bg-[#2C2C2E] rounded-3xl p-8 text-white relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold mb-2">Weekly reflection</h3>
                    <p className="text-gray-400 text-sm mb-6">
                        A clear summary of your week that highlights what improved and what needs adjusting.
                    </p>
                    {/* Mini chart */}
                    <div className="bg-[#3A3A3C] rounded-xl p-4">
                        <p className="text-[11px] text-gray-400 mb-3">Your week at a glance</p>
                        <div className="flex items-end gap-2 h-16 mb-3">
                            {[
                                { label: "Workout", heights: [40, 60, 50, 70, 55], color: "bg-orange-500" },
                                { label: "Meditation", heights: [30, 45, 55, 35, 65], color: "bg-blue-500" },
                                { label: "Reading", heights: [50, 35, 45, 60, 40], color: "bg-green-500" },
                            ].map((set, si) => (
                                set.heights.map((h, hi) => (
                                    <div key={`${si}-${hi}`} className={`${set.color} rounded-sm w-3`} style={{ height: `${h}%` }} />
                                ))
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span className="text-[10px] text-gray-400">Workout</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                <span className="text-[10px] text-gray-400">Meditation</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span className="text-[10px] text-gray-400">Reading</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <div className="bg-[#3A3A3C] rounded-xl px-3 py-2 flex-1">
                            <p className="text-white text-[11px] font-medium">Streaks completed</p>
                            <p className="text-gray-400 text-[9px]">3 streaks improved</p>
                        </div>
                        <div className="bg-[#3A3A3C] rounded-xl px-3 py-2 flex-1">
                            <p className="text-white text-[11px] font-medium">Focused sessions</p>
                            <p className="text-gray-400 text-[9px]">Total time: 4h 20m</p>
                        </div>
                    </div>
                </motion.div>

                {/* Gentle reminders */}
                <motion.div
                    variants={fadeInUp}
                    transition={{ duration: 0.5 }}
                    className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-3xl p-8 relative overflow-hidden"
                >
                    <h3 className="text-xl font-bold text-text-main mb-2">Gentle reminders</h3>
                    <p className="text-text-muted text-sm mb-6">
                        Short, calm nudges that help you stay consistent without pushing too hard.
                    </p>

                    {/* Notification cards */}
                    <div className="space-y-3">
                        <div className="bg-white rounded-xl p-4 border border-border">
                            <p className="text-[11px] text-text-muted mb-1">8:30 PM • Evening Wind-Down</p>
                            <p className="text-sm font-medium text-text-main mb-3">Time to stretch and refresh before your next task.</p>
                            <div className="flex gap-2">
                                <button className="bg-[#1D1D1F] text-white text-[12px] font-medium rounded-full px-4 py-1.5">
                                    I&apos;m on it
                                </button>
                                <button className="bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl text-text-muted text-[12px] font-medium rounded-full px-4 py-1.5">
                                    Later
                                </button>
                            </div>
                        </div>
                        {[
                            { title: "Stretch for 2 minutes", desc: "A quick reset helps reduce stiffness." },
                            { title: "Review your next task", desc: "Stay on track for the next hour." },
                            { title: "Take a 5-minute break", desc: "Your focus session is almost done." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-xl p-3 border border-border flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 shrink-0" />
                                <div>
                                    <p className="text-[12px] font-medium text-text-main">{item.title}</p>
                                    <p className="text-[10px] text-text-muted">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
