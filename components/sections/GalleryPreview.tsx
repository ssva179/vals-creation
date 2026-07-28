"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const galleryImages = [
    {
        src: "/images/gallery/gallery-1.jpg",
        alt: "A styled event setup by Bals Creations",
    },
    {
        src: "/images/gallery/gallery-2.jpg",
        alt: "A custom dessert display at a celebration",
    },
    {
        src: "/images/gallery/gallery-3.jpg",
        alt: "An interactive cart prepared for an event",
    },
    {
        src: "/images/gallery/gallery-4.jpg",
        alt: "Marquee letters displayed at a celebration",
    },
    {
        src: "/images/gallery/gallery-5.jpg",
        alt: "A detailed event setup by Bals Creations",
    },
];

export default function GalleryPreview() {
    return (
        <section
            id="gallery-preview"
            className="relative overflow-hidden bg-[#fbf7f2] px-6 py-24 lg:px-10 lg:py-32"
        >
            {/* Decorative background details */}
            <div
                aria-hidden="true"
                className="absolute -left-24 top-20 h-56 w-56 rounded-full border border-[#c5a065]/10"
            />

            <div
                aria-hidden="true"
                className="absolute -right-20 bottom-20 h-48 w-48 rounded-full border border-[#d98f82]/10"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mx-auto max-w-2xl text-center"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                        Gallery Preview
                    </p>

                    {/* Metallic divider */}
                    <div className="mx-auto my-7 flex max-w-[300px] items-center gap-4">
                        <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]" />

                        <span
                            aria-hidden="true"
                            className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-xl text-transparent"
                        >
                            ✦
                        </span>

                        <span className="h-[1.5px] flex-1 bg-gradient-to-l from-[#8d6b2f] via-[#f4d98a] to-[#b98a3a]" />
                    </div>

                    <h2 className="font-heading text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] md:text-5xl">
                        A Glimpse Into
                        <br />
                        Recent Celebrations
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl leading-7 text-[#756e69]">
                        Explore a few of the thoughtful details and interactive
                        experiences created for recent events.
                    </p>
                </motion.div>

                {/* Mobile gallery */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.12,
                            },
                        },
                    }}
                    className="mt-14 space-y-4 lg:hidden"
                >
                    {/* Large featured image */}
                    <motion.div
                        variants={{
                            hidden: {
                                opacity: 0,
                                y: 30,
                                scale: 0.97,
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
                        className="rounded-[20px] bg-gradient-to-br from-[#8d6b2f] via-[#f5d889] to-[#b98a3a] p-[1.5px]"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[18.5px] bg-[#fffdfa] shadow-[0_20px_48px_rgba(92,65,45,0.14)]">
                            <Image
                                src={galleryImages[0].src}
                                alt={galleryImages[0].alt}
                                fill
                                priority={false}
                                sizes="calc(100vw - 3rem)"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                        </div>
                    </motion.div>

                    {/* Four smaller images */}
                    <div className="grid grid-cols-2 gap-4">
                        {galleryImages.slice(1).map((image, index) => (
                            <motion.div
                                key={image.src}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 24,
                                        scale: 0.97,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            duration: 0.7,
                                            ease: [0.22, 1, 0.36, 1],
                                        },
                                    },
                                }}
                                className="relative aspect-square overflow-hidden rounded-[16px] border border-[#e6d2a2]/55 bg-[#fffdfa] shadow-[0_14px_32px_rgba(92,65,45,0.1)]"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    sizes="calc((100vw - 4rem) / 2)"
                                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Desktop gallery */}
                <div className="mt-16 hidden grid-cols-4 grid-rows-2 gap-5 lg:grid">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.src}
                            initial={{ opacity: 0, y: 26 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className={`
                                group
                                relative
                                overflow-hidden
                                rounded-sm
                                ${
                                index === 0
                                    ? "col-span-2 row-span-2 min-h-[560px]"
                                    : "aspect-square"
                            }
                            `}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                sizes={
                                    index === 0
                                        ? "(min-width: 1024px) 50vw, 100vw"
                                        : "(min-width: 1024px) 25vw, 50vw"
                                }
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />

                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* View gallery button */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.65,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-10 text-center lg:mt-12"
                >
                    <Link
                        href="/gallery"
                        className="group inline-flex items-center gap-4 rounded-sm bg-[#c48276] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f9]"
                    >
                        View Full Gallery

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
            </div>
        </section>
    );
}