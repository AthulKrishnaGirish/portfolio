"use client";

import { motion } from "framer-motion";

const technologies = [
    "Python", "C", "R", "SQL", "HTML5", "CSS3", "JavaScript", "Verilog", "VHDL",
    "Tailwind CSS", "Git", "GitHub", "Linux", "VS Code",
    "Machine Learning", "Deep Learning", "Data Structures", "ARIMA", "LSTM", "Facebook Prophet",
    "Arduino", "Raspberry Pi", "IoT", "PCB Design", "VLSI", "Analog Circuits", "Logic Design",
    "SolidWorks", "AutoCAD", "KiCad", "LTspice", "Xilinx Vivado", "OpenRocket"
];

export default function TechMarquee() {
    return (
        <section className="py-10 bg-black border-y border-white/5 overflow-hidden relative z-20">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30
                }}
            >
                {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="mx-8 flex items-center gap-2 group cursor-default"
                    >
                        <span className="text-2xl md:text-3xl font-bold text-zinc-700 group-hover:text-zinc-300 transition-colors uppercase tracking-widest">
                            {tech}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-indigo-500 transition-colors" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
