"use client";

import Link from "next/link";
import { motion, stagger } from "motion/react";

const services = [
    {
        number: "01",
        title: "Interactive Carts",
        description:
            "Beautifully styled mobile carts designed to become an interactive centerpiece while serving guests in a memorable way.",
        linkText: "View Cart Gallery",
    },
    {
        number: "02",
        title: "Dessert Experiences",
        description:
            "From paletas to specialty treats, each dessert display is thoughtfully arranged to feel inviting, polished, and celebration-ready.",
        linkText: "See Dessert Displays",
    },
    {
        number: "03",
        title: "Marquee Letter Rentals",
        description:
            "Statement letters that transform your venue, personalize the celebration, and create a beautiful backdrop for photos and memories.",
        linkText: "Browse Letter Designs",
    },
    {
        number: "04",
        title: "Event Styling & Details",
        description:
            "Thoughtful finishing touches that bring the celebration together and help every event feel cohesive, personal, and unforgettable.",
        linkText: "Explore Event Inspiration",
    },
];

const sectionContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.12, {
                startDelay: 0.1,
            }),
        },
    },
};

const serviceItem = {
    hidden: {
        opacity: 0,
        y: 28,
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

export default function Services() {
    return (
        <motion.section
            id="services"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={sectionContainer}
            className="relative overflow-hidden bg-[#fbf7f2fc] px-6 lg:px-10"
        >
            {/* Subtle decorative background details */}
            <div
                aria-hidden="true"
                className="absolute -left-28 top-24 h-56 w-56 rounded-full border border-[#c5a065]/10"
            />

            <div
                aria-hidden="true"
                className="absolute -right-24 bottom-16 h-48 w-48 rounded-full border border-[#d98f82]/10"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    variants={serviceItem}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                        Our Services
                    </p>

                    {/* Animated metallic divider */}
                    <div className="mx-auto my-7 flex max-w-[340px] items-center gap-4">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
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
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
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
                                delay: 0.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="h-[1.5px] flex-1 origin-left bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]"
                        />
                    </div>

                    <h2 className="font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] md:text-5xl lg:text-6xl">
                        Thoughtfully Curated
                        <br />
                        For Every Celebration
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#706965] sm:text-lg sm:leading-8">
                        From interactive experiences to statement details, each
                        service is designed to help your celebration feel beautiful,
                        personal, and unforgettable.
                    </p>
                </motion.div>

                {/* Services list */}
                <motion.div
                    variants={sectionContainer}
                    className="mt-16 border-t border-[#d8bd8c]/35 lg:mt-20"
                >
                    {services.map((service) => (
                        <motion.article
                            key={service.title}
                            variants={serviceItem}
                            className="
                                group
                                relative
                                border-b
                                border-[#d8bd8c]/35
                                py-10
                                transition-colors
                                duration-500
                                hover:border-[#b88941]/60
                                sm:py-12
                                lg:grid
                                lg:grid-cols-[90px_1fr_1.15fr_auto]
                                lg:items-center
                                lg:gap-10
                                lg:py-14
                            "
                        >
                            {/* Number */}
                            <div className="mb-5 flex items-center gap-3 lg:mb-0">
                                <span
                                    aria-hidden="true"
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-gradient-to-br
                                        from-[#f8e6af]
                                        via-[#d5ae55]
                                        to-[#8f6729]
                                        shadow-[0_1px_4px_rgba(143,103,41,0.25)]
                                    "
                                />

                                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b38d4f]">
                                    {service.number}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-heading text-3xl font-medium tracking-[-0.02em] text-[#3f3a37] transition-transform duration-300 group-hover:translate-x-1 lg:text-4xl">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-5 max-w-xl leading-7 text-[#756e69] lg:mt-0">
                                {service.description}
                            </p>

                            {/* Link */}
                            <div className="mt-7 lg:mt-0 lg:justify-self-end">
                                <Link
                                    href="/gallery"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-3
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-[0.14em]
                                        text-[#977038]
                                        transition-colors
                                        duration-300
                                        hover:text-[#b07768]
                                    "
                                >
                                    {service.linkText}

                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h14M13 6l6 6-6 6"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* Subtle gold hover line */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    bottom-[-1px]
                                    left-0
                                    h-px
                                    w-0
                                    bg-gradient-to-r
                                    from-[#8d6b2f]
                                    via-[#f4d98a]
                                    to-[#b98a3a]
                                    transition-all
                                    duration-700
                                    group-hover:w-full
                                "
                            />
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}