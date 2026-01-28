"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setSubmitted(true);
        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 3000);

        // Construct mailto link as fallback for actual functionality if needed immediately
        window.location.href = `mailto:athul.girish2255@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    };

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's work <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                                together.
                            </span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 max-w-md">
                            I'm always open to discussing new projects or partnership opportunities.
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <a
                                href="mailto:athul.girish2255@gmail.com"
                                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <span className="text-lg">athul.girish2255@gmail.com</span>
                            </a>

                            <a
                                href="tel:+919496470283"
                                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <span className="text-lg">+91 9496470283</span>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/AthulKrishnaGirish"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-full transition-all text-zinc-400 hover:text-white"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href="https://linkedin.com/in/athul-krishna-girish"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-full transition-all text-zinc-400 hover:text-blue-400"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-4 bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 rounded-full transition-all text-zinc-400 hover:text-emerald-400 font-medium text-sm flex items-center gap-2"
                            >
                                Resume
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-zinc-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <MagnetizeButton
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black hover:bg-zinc-200 border-none font-semibold h-12"
                            >
                                {isSubmitting ? "Connecting..." : submitted ? "Message Sent!" : "Sent"}
                            </MagnetizeButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
