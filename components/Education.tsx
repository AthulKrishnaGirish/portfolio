"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface EducationItem {
    school: string;
    degree: string;
    period: string;
    location: string;
    score?: string;
    details?: string[];
}

const education: EducationItem[] = [
    {
        school: "Indian Institute of Technology, Guwahati",
        degree: "B.Sc(Hons) in Data Science & Artificial Intelligence",
        period: "09/2024 – Ongoing",
        location: "Online",
        score: "CGPA - 7.4",
    },
    {
        school: "Govt. Model Engineering College, Thrikkakara",
        degree: "B.Tech in Electronics Engineering (VLSI Design & Technology)",
        period: "08/2024 – Ongoing",
        location: "Kochi, India",
        score: "CGPA - 9.48",
    },
    {
        school: "ST. Mary's Public School, Kizhakkambalam, Kerala",
        degree: "12th, CBSE Bio-Mathematics",
        period: "03/2023 – 03/2024",
        location: "Kochi, India",
        score: "Percentage - 95.2%",
        details: ["10th, CBSE - Percentage - 96.2%"],
    },
];

export default function Education() {
    return (
        <section className="py-20 bg-black text-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-white/90 to-indigo-300">
                        Education
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Academic background and qualifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
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
                            <div className="relative h-full rounded-xl bg-zinc-900/30 p-8">
                                <div className="absolute top-8 right-8 text-zinc-700 group-hover:text-rose-400 transition-colors">
                                    <GraduationCap className="w-8 h-8" />
                                </div>

                                <div className="space-y-6">
                                    <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        {edu.period}
                                    </span>

                                    <div>
                                        <h3 className="text-lg font-bold text-white leading-tight mb-3">
                                            {edu.school}
                                        </h3>
                                        <p className="text-rose-200/80 text-sm font-medium">
                                            {edu.degree}
                                        </p>
                                    </div>

                                    <div className="pt-6 border-t border-white/5 space-y-3">
                                        <p className="text-zinc-400 text-sm flex justify-between">
                                            <span>Location</span>
                                            <span className="text-white">{edu.location}</span>
                                        </p>
                                        {edu.score && (
                                            <p className="text-zinc-400 text-sm flex justify-between">
                                                <span>Score</span>
                                                <span className="text-white font-medium">{edu.score}</span>
                                            </p>
                                        )}
                                        {edu.details && edu.details.map((d, i) => (
                                            <p key={i} className="text-zinc-500 text-xs mt-2 italic">
                                                {d}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
