"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface ProjectItem {
    title: string;
    category: string;
    description: string;
    tags: string[];
    links?: {
        demo?: string;
        github?: string;
    };
    gradient: string;
}

const projects: ProjectItem[] = [
    {
        title: "CrowdSense - AI Crowd Intelligence",
        category: "AI & Public Safety",
        description: "Real-time crowd monitoring platform using Google Gemini Vision AI. Features venue-capacity awareness, privacy-first edge processing, and 'Aami' AI safety assistant for smart alerts and guidance.",
        tags: ["Google Gemini Vision", "React", "TypeScript", "Supabase", "Tailwind CSS"],
        links: {
            demo: "https://crowdsense-live.vercel.app/",
        },
        gradient: "from-blue-400 to-indigo-400",
    },
    {
        title: "SIDDHANT (SIH 2025 Grand Finale Project)",
        category: "AI & Heritage",
        description: "Built a platform for generating precise dimensions for ancient astronomical Yantras. Used PINNs (Physics-Informed Neural Networks) to ensure geometric consistency and MapMyIndia for location-specific calibration.",
        tags: ["Python", "PINNs", "Deep Learning", "MapMyIndia", "3D Modeling"],
        links: {
            // demo: "#", // No demo link provided yet, keeping empty or placeholder if needed. User didn't specify link here, just details.
        },
        gradient: "from-amber-300 to-orange-400",
    },
    {
        title: "Stock Price Forecasting",
        category: "AI & Finance",
        description: "Developed a comprehensive stock market forecasting system for Apple Inc. (AAPL). Implemented advanced time series models including ARIMA, Prophet, and LSTM to analyze trends and seasonality. Deployed as an interactive Streamlit web app.",
        tags: ["Python", "LSTM", "ARIMA", "Prophet", "Streamlit", "Deep Learning"],
        links: {
            // demo removed
        },
        gradient: "from-emerald-300 to-cyan-300",
    },
    {
        title: "Autonomous Line Following Robot",
        category: "Robotics & Embedded Systems",
        description: "Designed an autonomous robot using Arduino Uno, IR sensor array, and L298N motor driver. Engineered custom algorithms for dynamic speed adjustment and predictive movement, ensuring stability on sharp turns.",
        tags: ["Arduino", "C++", "Embedded Systems", "Robotics", "Sensors", "Control Algorithms"],
        gradient: "from-orange-300 to-rose-300",
    },
];

export default function Projects() {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white/90 to-purple-300">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        A showcase of my improved technical application and problem-solving skills.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative h-full rounded-2xl border border-white/5 p-2"
                        >

                            <GlowingEffect
                                spread={40}
                                glow={true}
                                disabled={false}
                                proximity={64}
                                inactiveZone={0.01}
                                borderWidth={3}
                            />
                            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-900/50 border border-white/10 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-indigo-500/10">

                                <div className="p-8 h-full flex flex-col">
                                    <div className="mb-4">
                                        <span className={cn("text-xs font-bold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r", project.gradient)}>
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-indigo-200 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-zinc-400 leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 text-xs rounded-md bg-white/5 text-zinc-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        {project.links?.demo && (
                                            <Link
                                                href={project.links.demo}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-300 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </Link>
                                        )}
                                        {project.links?.github && (
                                            <Link
                                                href={project.links.github}
                                                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source Code
                                            </Link>
                                        )}
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
