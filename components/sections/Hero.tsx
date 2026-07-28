"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const heroContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.12,
        },
    },
};

const mobileHeroContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.25,
            staggerChildren: 0.12,
        },
    },
};

const heroItem = {
    hidden: {
        opacity: 0,
        y: 22,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function Hero() {
    return (
        <motion.section
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
            className="relative scroll-mt-24 overflow-hidden bg-[#fbf7f2]"
        >
            {/* Fabric background */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.9,
                    ease: "easeOut",
                }}
                className="absolute inset-0"
            >
                <Image
                    src="/backgrounds/fabric.jpeg"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover opacity-40"
                />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-7xl">
                {/* Desktop hero display */}
                <div className="relative hidden min-h-[760px] px-10 py-14 lg:block">
                    {/* Main photograph */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 45,
                            scale: 1.04,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 1.05,
                            delay: 0.12,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            absolute
                            top-10
                            -right-10
                            h-[680px]
                            w-[62%]
                            overflow-hidden
                            rounded-bl-[180px]
                            rounded-tl-[180px]
                            shadow-[0_24px_60px_rgba(92,65,45,0.10)]
                        "
                    >
                        <Image
                            src="/images/hero/paleta-cart.png"
                            alt="A custom Paleta Bar cart prepared for a special event"
                            fill
                            priority
                            sizes="62vw"
                            className="object-cover object-[68%_60%]"
                        />

                        {/* Soft left fade */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fbf7f2]/20 to-transparent"
                        />
                    </motion.div>

                    {/* Desktop text box */}
                    <motion.div
                        variants={heroContainer}
                        initial="hidden"
                        animate="visible"
                        className="absolute left-10 top-20 z-20 w-[49%] bg-[#fffdfa]/95 p-3 shadow-lg shadow-black/50 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 24,
                                scale: 0.985,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.85,
                                delay: 0.28,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="border border-[#d8bd8c]/70 px-10 py-12 xl:px-14 xl:py-14"
                        >
                            <motion.p
                                variants={heroItem}
                                className="pl-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#c48276]"
                            >
                                Beautiful. Interactive. Unforgettable.
                            </motion.p>

                            {/* Animated divider */}
                            <motion.div
                                variants={heroItem}
                                className="my-8 flex max-w-[340px] items-center gap-4"
                            >
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.65,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-px flex-1 origin-right bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
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
                                        delay: 0.82,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-sm text-transparent drop-shadow-[0_1px_1px_rgba(255,245,200,0.5)]"
                                >
                                    ✦
                                </motion.span>

                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.65,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="h-px flex-1 origin-left bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                                />
                            </motion.div>

                            <motion.h1
                                variants={heroItem}
                                className="font-heading text-4xl font-medium leading-[0.98] tracking-[-0.03em] text-[#3f3a37] xl:text-6xl"
                            >
                                Creating
                                <br />
                                Unforgettable Moments
                            </motion.h1>

                            <motion.p
                                variants={heroItem}
                                className="mt-7 max-w-lg text-lg leading-8 text-[#6f6863]"
                            >
                                Thoughtfully curated experiences that bring beauty,
                                connection, and joy to every celebration.
                            </motion.p>

                            {/* Desktop buttons */}
                            <motion.div
                                variants={heroItem}
                                className="mt-9 flex flex-wrap gap-4"
                            >
                                <Link
                                    href="/inquiry"
                                    className="flex min-w-[210px] items-center justify-center gap-7 rounded-sm bg-[#c48276] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f79]"
                                >
                                    Reserve Your Date
                                </Link>

                                <div className="rounded-sm bg-gradient-to-r from-[#9a7432] via-[#f8e6af] to-[#b88941] p-[1.5px]">
                                    <Link
                                        href="/gallery"
                                        className="flex min-w-[190px] items-center justify-center rounded-sm bg-[#fffdfa] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#9b7945] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#faf6ef]"
                                    >
                                        View Gallery
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Animated polaroid */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 48,
                            rotate: -10,
                            scale: 0.92,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: -4,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.88,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute bottom-12 left-[45%] z-30 w-[280px] bg-white p-3 pb-9 shadow-lg shadow-black/50 xl:w-[310px]"
                    >
                        <motion.div
                            aria-hidden="true"
                            initial={{
                                opacity: 0,
                                scaleX: 0.5,
                            }}
                            animate={{
                                opacity: 1,
                                scaleX: 1,
                            }}
                            transition={{
                                duration: 0.45,
                                delay: 1.35,
                            }}
                            className="absolute -top-3 left-1/2 h-7 w-20 -translate-x-1/2 rotate-2 bg-[#d8bd8c]/75"
                        />

                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/hero/charcuterie.jpg"
                                alt="A colorful custom charcuterie serving tray"
                                fill
                                sizes="310px"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Mobile hero display */}
                <div className="lg:hidden">
                    <div className="relative min-h-[calc(100svh-6rem)] overflow-hidden pt-4">
                        {/* Mobile readability overlays */}
                        <motion.div
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="absolute inset-0 bg-black/25"
                        />

                        <motion.div
                            aria-hidden="true"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.1,
                            }}
                            className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/75"
                        />

                        <div className="relative -top-8 z-10 flex min-h-[calc(100svh-6rem)] items-end px-6 py-12 sm:px-10 sm:py-16">
                            <motion.div
                                variants={mobileHeroContainer}
                                initial="hidden"
                                animate="visible"
                                className="w-full max-w-xl text-white"
                            >
                                <motion.p
                                    variants={heroItem}
                                    className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#f3b5aa]"
                                >
                                    Beautiful. Interactive. Delicious.
                                </motion.p>

                                {/* Mobile animated divider */}
                                <motion.div
                                    variants={heroItem}
                                    className="my-8 flex max-w-[300px] items-center gap-4"
                                >
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{
                                            duration: 0.75,
                                            delay: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="h-px flex-1 origin-right bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
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
                                            duration: 0.55,
                                            delay: 0.62,
                                        }}
                                        className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-sm text-transparent drop-shadow-[0_1px_1px_rgba(255,245,200,0.5)]"
                                    >
                                        ✦
                                    </motion.span>

                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{
                                            duration: 0.75,
                                            delay: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="h-px flex-1 origin-left bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                                    />
                                </motion.div>

                                <motion.h1
                                    variants={heroItem}
                                    className="font-heading text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl"
                                >
                                    Creating
                                    <br />
                                    Unforgettable Moments
                                </motion.h1>

                                <motion.p
                                    variants={heroItem}
                                    className="mt-6 max-w-md font-sans text-base leading-7 text-white/90 sm:text-lg sm:leading-8"
                                >
                                    Thoughtfully curated experiences that bring beauty,
                                    connection, and joy to every celebration.
                                </motion.p>

                                {/* Mobile buttons */}
                                <motion.div
                                    variants={heroItem}
                                    className="mt-8 flex flex-col gap-3 sm:max-w-sm"
                                >
                                    <Link
                                        href="/inquiry"
                                        className="flex items-center justify-center gap-7 rounded-sm bg-[#c48276] px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#cc978f] hover:text-[#70534f]"
                                    >
                                        Reserve Your Date
                                    </Link>

                                    <Link
                                        href="/gallery"
                                        className="flex items-center justify-center rounded-sm border border-[#8d6b2f] bg-black/10 px-6 py-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-[#8d6b2f] backdrop-blur-sm transition-colors hover:bg-[#b5a269] hover:text-[#3f3a37]"
                                    >
                                        View Gallery
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fade from Hero into About section */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    z-40
                    h-36
                    bg-gradient-to-b
                    from-transparent
                    via-[#fbf7f2]/35
                    via-55%
                    to-[#fbf7f2]
                "
            />
        </motion.section>
    );
}