"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const dockItems = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/AthulKrishnaGirish",
        color: "hover:text-white"
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/athul-krishna-girish/",
        color: "hover:text-blue-400"
    },
    {
        name: "Email",
        icon: Mail,
        href: "mailto:athul.girish2255@gmail.com",
        color: "hover:text-rose-400"
    },
    {
        name: "Resume",
        icon: FileText,
        href: "/resume.pdf",
        color: "hover:text-emerald-400"
    }
];

export default function FloatingDock() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="fixed top-24 left-6 z-40 hidden md:block">
            <motion.div
                className="flex flex-col items-center gap-2 px-3 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 20 }}
            >
                {dockItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative group"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 10 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black/80 border border-white/10 text-white text-xs rounded backdrop-blur-sm whitespace-nowrap pointer-events-none z-50"
                                >
                                    {item.name}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Link
                            href={item.href}
                            target="_blank"
                            className={`block p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 ${item.color} relative text-zinc-400`}
                        >
                            <item.icon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
                        </Link>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
