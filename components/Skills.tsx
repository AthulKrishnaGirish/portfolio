"use client";

import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const skillCategories = [
    {
        title: "Programming & Languages",
        skills: ["Python", "C", "R", "SQL", "HTML5", "CSS3", "JavaScript", "Verilog", "VHDL"],
    },
    {
        title: "Frameworks & Tools",
        skills: ["Tailwind CSS", "Git", "GitHub", "Linux", "VS Code"],
    },
    {
        title: "AI & Data Science",
        skills: ["Machine Learning", "Deep Learning", "Data Structures", "ARIMA", "LSTM", "Facebook Prophet"],
    },
    {
        title: "Engineering & Hardware",
        skills: ["Arduino", "Raspberry Pi", "IoT", "PCB Design", "VLSI", "Analog Circuits", "Logic Design"],
    },
    {
        title: "CAD & Simulation",
        skills: ["SolidWorks", "AutoCAD", "KiCad", "LTspice", "Xilinx Vivado", "OpenRocket"],
    },
    {
        title: "Soft Skills & Leadership",
        skills: ["Team Leadership", "Project Management", "Problem Solving", "Public Speaking", "Collaboration", "Strategic Planning"],
    },
];

export default function Skills() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white/90 to-indigo-300">
                        Technical Arsenal
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        A comprehensive toolkit spanning software development, data science, and hardware engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative h-full rounded-2xl border border-white/5 p-2"
                        >
                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative h-full rounded-xl bg-white/[0.03] p-6 border border-white/10 hover:border-indigo-500/30 transition-colors">
                                <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/5 pb-3">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 text-xs md:text-sm rounded-full bg-white/5 text-zinc-300 border border-white/5 hover:bg-white/10 hover:text-white transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
