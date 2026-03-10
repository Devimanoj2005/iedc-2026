"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const events = [
    {
        title: "Prayana - Alumni Entrepreneur Meetup",
        date: "23-08-2025",
        status: "OPEN NOW",
        image: "/events/PRAYANA2025.jpg",
    },
    {
        title: "Wednesday Cafe - 13.08.2025",
        date: "13-08-2025",
        status: "EXPIRED",
        image: "/events/WEDCAFE1308.jpg",
    },
    {
        title: "Build And Ship",
        date: "05-08-2025",
        status: "EXPIRED",
        image: "/events/BUILDANDSHIP.jpg",
    },
    {
        title: "INSENDIUM 10.0",
        date: "04-08-2025",
        status: "EXPIRED",
        image: "/events/INSENDIUM10.0.jpg",
    },
    {
        title: "Techy Podia",
        date: "31-07-2025",
        status: "EXPIRED",
        image: "/events/Techypedia.jpg",
    },
    {
        title: "Wednesday Cafe with Shaheen Hyder",
        date: "15-01-2025",
        status: "EXPIRED",
        image: "/events/event3.jpg",
    },
];

export default function EventSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <section id="events" className="pt-16 md:pt-24 pb-0 overflow-x-clip">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                    <motion.h2
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-[56px] font-bold tracking-tight leading-none"
                    >
                        <span className="text-[#FF7A00]">BOOTCAMP</span>
                        <br />
                        <span className="text-text-main">EVENTS</span>
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
                        <p className="text-text-muted text-sm font-medium">Empowering Student Innovators</p>
                    </motion.div>
                </div>
            </div>

            {/* Scrollable cards */}
            <div className="relative group">
                <motion.div
                    ref={scrollRef}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing px-6 xl:px-[calc((100vw-80rem)/2+1.5rem)]"
                >
                    {events.map((event, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 w-[280px] md:w-[320px] flex flex-col gap-4"
                        >
                            {/* Card Image */}
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                                <Image
                                    src={event.image}
                                    alt={event.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Card Info */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center text-[13px] font-semibold">
                                    <span className="text-[#22C55E]">{event.date}</span>
                                    <span className="text-text-muted/60 tracking-wider font-bold">
                                        {event.status}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-text-main line-clamp-2 leading-tight">
                                    {event.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Navigation Arrows */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
