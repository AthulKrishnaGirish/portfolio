"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Brain, Map } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Achievements() {
    return (
        <section className="py-20 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                        Achievements
                    </h2>
                    <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                        Milestones that define my journey.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative rounded-3xl border border-white/10 p-2">
                        <GlowingEffect
                            spread={40}
                            glow={true}
                            disabled={false}
                            proximity={64}
                            inactiveZone={0.01}
                            borderWidth={3}
                        />
                        <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 overflow-hidden">
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                                {/* Left Column: Highlight */}
                                <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
                                    <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-indigo-400 mb-6">
                                        <Trophy className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">SIH 2025 Finalist</h3>
                                    <p className="text-zinc-400 font-medium mb-4">Smart India Hackathon</p>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">Grand Finale</span>
                                        <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400">Team Meta Learners</span>
                                    </div>
                                </div>

                                {/* Right Column: Details */}
                                <div className="md:w-2/3 space-y-6">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                            Project SIDDHANT
                                        </h4>
                                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                                            <span className="text-zinc-500 block mb-2 italic">Sanskrit Intelligent for Dimensional Design of Astronomical Network and Tools</span>
                                            Developed a platform generating precise, location-specific dimensions for 14 ancient Indian astronomical Yantras. Addressed a problem statement by the Indian Knowledge Systems (IKS), AICTE.
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Brain className="w-5 h-5 text-indigo-400" />
                                                <h5 className="font-medium text-white text-sm">Tech Core</h5>
                                            </div>
                                            <p className="text-zinc-400 text-xs leading-relaxed">
                                                Implemented <span className="text-indigo-300">Physics-Informed Neural Networks (PINNs)</span> to preserve geometric consistency between ancient principles and modern rigour.
                                            </p>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Map className="w-5 h-5 text-rose-400" />
                                                <h5 className="font-medium text-white text-sm">Key Features</h5>
                                            </div>
                                            <p className="text-zinc-400 text-xs leading-relaxed">
                                                Sovereign mapping using <span className="text-rose-300">MapMyIndia</span>, 3D models, and AR-based visualization for intuitive validation.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-zinc-500 text-sm italic">
                                            "Not every journey is about the final position. Some journeys are about who you become along the way. A transformative experience of resilience, collaboration, and innovation."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
