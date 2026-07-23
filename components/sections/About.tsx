"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, stagger, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const photoContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.16, {
                startDelay: 0.15,
            }),
        },
    },
};

const photoItem = {
    hidden: {
        opacity: 0,
        y: 70,
        scale: 0.94,
        rotate: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const textContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.1, {
                startDelay: 0.25,
            }),
        },
    },
};

const textItem = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    /*
     * Each desktop photo moves at a slightly different speed.
     * Keep these values small so the effect stays elegant.
     */
    const leftPhotoY = useTransform(
        scrollYProgress,
        [0, 1],
        [35, -35],
    );

    const centerPhotoY = useTransform(
        scrollYProgress,
        [0, 1],
        [60, -25],
    );

    const rightPhotoY = useTransform(
        scrollYProgress,
        [0, 1],
        [25, -55],
    );

    return (
        <motion.section
            ref={sectionRef}
            id="about"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden bg-[#fbf7f2fc] px-6 pb-24 pt-20 lg:px-10 lg:py-32"
        >
            {/* Soft decorative background details */}
            <div
                aria-hidden="true"
                className="absolute left-[-90px] top-24 h-64 w-64 rounded-full border border-[#c5a065]/15"
            />

            <div
                aria-hidden="true"
                className="absolute bottom-20 right-[-70px] h-52 w-52 rounded-full border border-[#d98f82]/15"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                {/* Desktop floating photos */}
                <motion.div
                    variants={photoContainer}
                    className="relative mx-auto hidden h-[540px] w-full max-w-[590px] lg:block"
                >
                    {/* Left photo */}
                    <motion.div
                        variants={photoItem}
                        style={{ y: leftPhotoY }}
                        whileHover={{
                            y: -8,
                            rotate: -1,
                            scale: 1.025,
                        }}
                        className="
                            absolute
                            left-0
                            top-24
                            z-10
                            w-[44%]
                            -rotate-3
                            bg-[#fffdfa]
                            p-2.5
                            pb-8
                            shadow-[0_18px_45px_rgba(92,65,45,0.16)]
                            transition-shadow
                            duration-300
                            hover:shadow-[0_26px_60px_rgba(92,65,45,0.22)]
                            sm:p-3
                            sm:pb-10
                        "
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -top-3 left-1/2 h-7 w-16 -translate-x-1/2 -rotate-2 bg-[#d8bd8c]/65 sm:w-20"
                        />

                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/about/about-cart.jpg"
                                alt="An interactive Bals Creations cart at an event"
                                fill
                                sizes="(min-width: 1024px) 260px, 42vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                            />
                        </div>
                    </motion.div>

                    {/* Center photo */}
                    <motion.div
                        variants={photoItem}
                        style={{ y: centerPhotoY }}
                        whileHover={{
                            y: -10,
                            rotate: 0,
                            scale: 1.025,
                        }}
                        className="
                            absolute
                            left-1/2
                            top-2
                            z-20
                            w-[45%]
                            -translate-x-1/2
                            rotate-1
                            bg-[#fffdfa]
                            p-2.5
                            pb-8
                            shadow-[0_22px_55px_rgba(92,65,45,0.2)]
                            transition-shadow
                            duration-300
                            hover:shadow-[0_30px_70px_rgba(92,65,45,0.24)]
                            sm:p-3
                            sm:pb-10
                        "
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -top-3 left-1/2 h-7 w-16 -translate-x-1/2 rotate-2 bg-[#ead5aa]/75 sm:w-20"
                        />

                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/about/about-dessert.jpg"
                                alt="A custom dessert experience by Bals Creations"
                                fill
                                sizes="(min-width: 1024px) 265px, 43vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                            />
                        </div>
                    </motion.div>

                    {/* Right photo */}
                    <motion.div
                        variants={photoItem}
                        style={{ y: rightPhotoY }}
                        whileHover={{
                            y: -8,
                            rotate: 1,
                            scale: 1.025,
                        }}
                        className="
                            absolute
                            bottom-6
                            right-0
                            z-30
                            w-[45%]
                            rotate-3
                            bg-[#fffdfa]
                            p-2.5
                            pb-8
                            shadow-[0_18px_45px_rgba(92,65,45,0.18)]
                            transition-shadow
                            duration-300
                            hover:shadow-[0_26px_60px_rgba(92,65,45,0.23)]
                            sm:p-3
                            sm:pb-10
                        "
                    >
                        <div
                            aria-hidden="true"
                            className="absolute -top-3 left-1/2 h-7 w-16 -translate-x-1/2 -rotate-1 bg-[#d8bd8c]/70 sm:w-20"
                        />

                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/about/about-marquee.jpg"
                                alt="Marquee letter rentals displayed at a celebration"
                                fill
                                sizes="(min-width: 1024px) 265px, 43vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                            />
                        </div>
                    </motion.div>

                    {/* Gold accent line */}
                    <motion.div
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.1,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            absolute
                            bottom-0
                            left-[8%]
                            h-px
                            w-[70%]
                            origin-left
                            bg-gradient-to-r
                            from-transparent
                            via-[#d7b56d]
                            to-transparent
                        "
                    />
                </motion.div>

                {/* About text */}
                <motion.div variants={textContainer}>
                    <motion.p
                        variants={textItem}
                        className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]"
                    >
                        About Bals Creations
                    </motion.p>

                    {/* Animated divider */}
                    <motion.div
                        variants={textItem}
                        className="my-7 flex max-w-[340px] items-center gap-4"
                    >
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-[1.5px] flex-1 origin-right bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                        />

                        <motion.span
                            aria-hidden="true"
                            initial={{
                                opacity: 0,
                                scale: 0.4,
                                rotate: -90,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.65,
                                delay: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-xl text-transparent"
                        >
                            ✦
                        </motion.span>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.35,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-[1.5px] flex-1 origin-left bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                        />
                    </motion.div>

                    <motion.h2
                        variants={textItem}
                        className="font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] md:text-5xl"
                    >
                        Thoughtful Details.
                        <br />
                        Beautiful Celebrations.
                    </motion.h2>

                    <motion.p
                        variants={textItem}
                        className="mt-7 max-w-xl text-lg leading-8 text-[#6f6863]"
                    >
                        At Bals Creations, we believe every celebration deserves
                        thoughtful details that leave a lasting impression. From
                        interactive carts and dessert experiences to marquee letters,
                        we create moments that bring people together.
                    </motion.p>

                    <motion.p
                        variants={textItem}
                        className="mt-5 max-w-xl leading-7 text-[#756e69]"
                    >
                        Whether you are planning an intimate gathering or a large
                        celebration, our goal is to make every experience feel
                        effortless, personal, and unforgettable.
                    </motion.p>

                    <motion.div
                        variants={textItem}
                        className="mt-8 grid gap-3 sm:grid-cols-2"
                    >
                        {[
                            "Interactive Carts",
                            "Dessert Experiences",
                            "Marquee Letters",
                            "Custom Event Details",
                        ].map((service) => (
                            <motion.div
                                key={service}
                                whileHover={{ x: 4 }}
                                className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#6f6863]"
                            >
                                <span
                                    aria-hidden="true"
                                    className="bg-gradient-to-b from-[#f5dda0] to-[#9c702d] bg-clip-text text-transparent"
                                >
                                    ✦
                                </span>

                                {service}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        variants={textItem}
                        className="mt-10"
                    >
                        <Link
                            href="/gallery"
                            className="group inline-flex items-center gap-4 rounded-sm bg-[#d98f82] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f73]"
                        >
                            Explore Our Work

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
                </motion.div>

                {/* Mobile animated photo story */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.22,
                            },
                        },
                    }}
                    className="relative mt-6 space-y-10 lg:col-span-2 lg:hidden"
                >
                    {/* Small introductory image */}
                    <motion.figure
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 42,
                                scale: 0.96,
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="relative ml-auto w-[55%] -rotate-1"
                    >
                        {/* Animated metallic border */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[20px] bg-gradient-to-br from-[#8d6b2f] via-[#f5d889] to-[#b98a3a] p-[1.5px]"
                        >
                            <motion.div
                                initial={{
                                    boxShadow: "0 0 0 rgba(92,65,45,0)",
                                }}
                                whileInView={{
                                    boxShadow: "0 18px 40px rgba(92,65,45,0.14)",
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.45,
                                }}
                                className="overflow-hidden rounded-[18.5px] bg-[#fffdfa]"
                            >
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src="/images/about/about-cart.jpg"
                                        alt="An interactive Bals Creations cart at an event"
                                        fill
                                        sizes="68vw"
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.figcaption
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.65,
                            }}
                            className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2d]"
                        >
                            Interactive Carts
                        </motion.figcaption>
                    </motion.figure>

                    {/* Main image */}
                    <motion.figure
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -36,
                                scale: 0.96,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.85,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="relative pr-8 w-[60%]"
                    >
                        {/* Animated metallic border */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[20px] bg-gradient-to-br from-[#8d6b2f] via-[#f5d889] to-[#b98a3a] p-[1.5px]"
                        >
                            <motion.div
                                initial={{
                                    boxShadow: "0 0 0 rgba(92,65,45,0)",
                                }}
                                whileInView={{
                                    boxShadow: "0 20px 48px rgba(92,65,45,0.15)",
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.45,
                                }}
                                className="overflow-hidden rounded-[18.5px] bg-[#fffdfa]"
                            >
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src="/images/about/about-dessert.jpg"
                                        alt="A custom dessert experience by Bals Creations"
                                        fill
                                        sizes="82vw"
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.figcaption
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.65,
                            }}
                            className="mt-4 text-left text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2d]"
                        >
                            Dessert Experiences
                        </motion.figcaption>
                    </motion.figure>

                    {/* Closing image */}
                    <motion.figure
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 36,
                                scale: 0.96,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.85,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="relative ml-auto w-[55%] rotate-1"
                    >
                        {/* Animated metallic border */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="rounded-[20px] bg-gradient-to-br from-[#8d6b2f] via-[#f5d889] to-[#b98a3a] p-[1.5px]"
                        >
                            <motion.div
                                initial={{
                                    boxShadow: "0 0 0 rgba(92,65,45,0)",
                                }}
                                whileInView={{
                                    boxShadow: "0 18px 42px rgba(92,65,45,0.14)",
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.45,
                                }}
                                className="overflow-hidden rounded-[18.5px] bg-[#fffdfa]"
                            >
                                <div className="relative aspect-[4/5]">
                                    <Image
                                        src="/images/about/about-marquee.jpg"
                                        alt="Marquee letter rentals displayed at a celebration"
                                        fill
                                        sizes="74vw"
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.figcaption
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.55,
                                delay: 0.65,
                            }}
                            className="mt-4 text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8f6b2d]"
                        >
                            Marquee Letters
                        </motion.figcaption>
                    </motion.figure>

                    {/* Decorative finishing line */}
                    <motion.div
                        aria-hidden="true"
                        variants={{
                            hidden: {
                                scaleX: 0,
                            },
                            visible: {
                                scaleX: 1,
                                transition: {
                                    duration: 1,
                                    delay: 0.2,
                                    ease: [0.22, 1, 0.36, 1],
                                },
                            },
                        }}
                        className="mx-auto h-px w-[72%] origin-center bg-gradient-to-r from-transparent via-[#c5a065] to-transparent"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
}