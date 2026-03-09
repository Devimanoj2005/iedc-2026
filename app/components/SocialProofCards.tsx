"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const users = [
    {
        name: "Aaron Lee",
        role: "Remote Engineer",
        quote: "Stopped breaking habits on weekends after switching to Habitline",
        gradient: "from-gray-700 to-gray-900",
    },
    {
        name: "Priya",
        role: "Busy Parent",
        quote: "Logged 40 focus sessions this month with Routine Stacks",
        gradient: "from-amber-700 to-amber-900",
    },
    {
        name: "Leo",
        role: "Creative Professional",
        quote: "10 Days\nHit hydration goals",
        gradient: "from-red-700 to-red-900",
    },
    {
        name: "Ramya",
        role: "Software Developer",
        quote: "Finally keeps his day organized with routine-based habit groups",
        gradient: "from-teal-700 to-teal-900",
    },
    {
        name: "Maya",
        role: "Student",
        quote: "Completed 21-day streak using Habitline",
        gradient: "from-orange-700 to-orange-900",
    },
    {
        name: "Daniel gray",
        role: "Founder",
        quote: "87% Improved weekly consistency",
        gradient: "from-blue-700 to-blue-900",
    },
];

export default function SocialProofCards() {
    return (
        <section id="events" className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                <motion.h2
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main leading-tight"
                >
                    What users are
                    <br />
                    achieving with Habitline
                </motion.h2>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col items-start md:items-end gap-2"
                >
                    {/* Avatar stack */}
                    <div className="flex items-center">
                        <div className="flex -space-x-2">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-white" />
                            ))}
                            <div className="w-8 h-8 rounded-full bg-[#1D1D1F] border-2 border-white flex items-center justify-center text-white text-[9px] font-medium">
                                +58
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={14} fill="#FF7A00" color="#FF7A00" />
                        ))}
                    </div>
                    <p className="text-text-muted text-sm font-medium">Trusted worldwide</p>
                </motion.div>
            </div>

            {/* Scrollable cards */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6"
            >
                {users.map((user, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className={`relative flex-shrink-0 w-48 h-72 md:w-56 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-b ${user.gradient} group cursor-pointer`}
                    >
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* User info at top */}
                        <div className="absolute top-4 left-4 right-4 z-10">
                            <p className="text-white text-sm font-semibold">{user.name}</p>
                            <p className="text-white/70 text-[11px]">· {user.role}</p>
                        </div>

                        {/* Quote at bottom */}
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                            <p className="text-white text-[13px] font-medium leading-snug whitespace-pre-line">
                                {user.quote}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
