"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue,
} from "framer-motion";
import { cn } from "@/app/lib/utils";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    baseVelocity?: number;
    className?: string;
}

export function Marquee({
    children,
    direction = "left",
    baseVelocity = 5,
    className,
}: MarqueeProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const wrap = (min: number, max: number, v: number) => {
        const rangeSize = max - min;
        return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
    };

    const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

    const directionFactor = useRef<number>(direction === "left" ? -1 : 1);

    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className={cn("flex overflow-hidden select-none", className)}>
            <motion.div className="flex flex-nowrap min-w-full" style={{ x }}>
                <div className="flex flex-nowrap shrink-0 items-center justify-start min-w-full">
                    {children}
                </div>
                <div className="flex flex-nowrap shrink-0 items-center justify-start min-w-full">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
