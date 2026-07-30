"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
    return (
        <section
            id="cta"
            className="relative overflow-hidden bg-[#fbf7f2fc] px-6 py-14 lg:px-10 lg:py-6"
        >
            {/* subtle gold glow */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e8d2a4]/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]"
                >
                    Ready to Celebrate?
                </motion.p>

                {/* Metallic divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0.8 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.15,
                    }}
                    className="mx-auto my-8 flex max-w-[320px] items-center gap-4"
                >
                    <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]" />

                    <span
                        aria-hidden="true"
                        className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-sm text-transparent"
                    >
                        ✦
                    </span>

                    <span className="h-[1.5px] flex-1 bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] md:text-5xl lg:text-6xl"
                >
                    Let's Create Something
                    <br />
                    Beautiful Together
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#756e69]"
                >
                    Whether you're planning an intimate gathering or a once-in-a-lifetime celebration, we'd love to create an experience that feels thoughtful, effortless, and unforgettable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.8,
                        delay: 0.45,
                    }}
                    className="mt-12"
                >
                    <Link
                        href="/inquiry"
                        className="group inline-flex items-center gap-4 rounded-sm bg-[#c48276] px-8 py-5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f79]"
                    >
                        Start Your Inquiry

                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 12h14M13 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.7,
                        delay: 0.6,
                    }}
                    className="mt-6 text-sm tracking-[0.03em] text-[#9b938d]"
                >
                    We typically respond within 24–48 hours.
                </motion.p>
            </div>
        </section>
    );
}