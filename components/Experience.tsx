"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "India Space Lab",
        role: "Space Tech Intern",
        period: "06/2025 – 07/2025", // Future date in resume? Keeping as is from resume text provided or adjusting to "Present" if strictly current?? The resume said 06/2025-07/2025 so I will use that.
        location: "Remote, India",
        description: [
            "Underwent an intensive interdisciplinary technical training program focused on next-generation aerospace technologies.",
            "Key focus areas included UAVs, Space Systems & Orbital Mechanics, CubeSats, Rocketry, and IoT.",
            "Acquired skills in CAD/CAE (SolidWorks, ANSYS), Ardupilot, UAV Flight Simulation (ROS, Gazebo), and PCB Design (EasyEDA).",
        ],
    },
    {
        company: "Zidio Development",
        role: "Data Science & Analytics Intern",
        period: "06/2025 – 07/2025",
        location: "Remote, India",
        description: [
            "Worked on a stock market forecasting project focused on predicting future prices of Apple Inc. (AAPL) stock.",
            "Implemented advanced forecasting models including ARIMA, Facebook Prophet, and LSTM.",
            "Built and deployed an interactive Streamlit web app for real-time stock prediction and visualization.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                        Professional Experience
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        My professional journey and technical internships.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative"
                        >
                            <div className="md:flex gap-6 relative group">
                                <div className="hidden md:flex flex-col items-center">
                                    <div className="w-px h-full bg-zinc-800 group-last:h-0" />
                                    <div className="absolute top-0 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10 group-hover:border-indigo-500 transition-colors">
                                        <Briefcase className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400" />
                                    </div>
                                </div>

                                <div className="flex-1 relative rounded-2xl border border-white/10 p-2">
                                    <GlowingEffect
                                        spread={40}
                                        glow={true}
                                        disabled={false}
                                        proximity={64}
                                        inactiveZone={0.01}
                                        borderWidth={3}
                                    />
                                    <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-900/50 p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-indigo-300 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            <div className="text-sm text-zinc-500 text-right md:text-left">
                                                <p>{exp.period}</p>
                                                <p>{exp.location}</p>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex gap-2 text-zinc-400 text-sm md:text-base">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
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
