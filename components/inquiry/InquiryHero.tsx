"use client";

import { motion } from "motion/react";

export default function InquiryHero() {
    return (
        <section className="relative overflow-hidden bg-[#fbf7f2] px-6 pb-14 pt-24 lg:px-10 lg:pb-20 lg:pt-32">
            {/* Decorative background details */}
            <div
                aria-hidden="true"
                className="absolute -left-24 top-16 h-56 w-56 rounded-full border border-[#c5a065]/10"
            />

            <div
                aria-hidden="true"
                className="absolute -right-20 bottom-6 h-44 w-44 rounded-full border border-[#d98f82]/10"
            />

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto max-w-3xl text-center"
            >
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                    Book Your Event
                </p>

                {/* Metallic divider */}
                <div className="mx-auto my-7 flex max-w-[320px] items-center gap-4">
                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-[1.5px] flex-1 origin-right bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                    />

                    <motion.span
                        aria-hidden="true"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            rotate: -45,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-xl text-transparent"
                    >
                        ✦
                    </motion.span>

                    <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="h-[1.5px] flex-1 origin-left bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                    />
                </div>

                <h1 className="font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] sm:text-5xl lg:text-6xl">
                    Let&apos;s Start Planning
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#756e69] sm:text-lg sm:leading-8">
                    Tell us a little about your celebration and the experience
                    you have in mind. We&apos;ll reach out within 24–48 hours to
                    discuss your vision and answer any questions.
                </p>
            </motion.div>
        </section>
    );
}