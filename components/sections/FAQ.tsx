"use client";

import { AnimatePresence, motion, stagger } from "motion/react";
import { useState } from "react";

const faqs = [
    {
        question: "How far in advance should I book?",
        answer:
            "We recommend booking as early as possible to ensure availability for your preferred date. However, we will always do our best to accommodate last-minute inquiries whenever possible.",
    },
    {
        question: "What types of events do you serve?",
        answer:
            "We provide services for birthdays, weddings, bridal showers, baby showers, graduations, corporate events, holiday celebrations, and many other special occasions.",
    },
    {
        question: "Can packages be customized?",
        answer:
            "Absolutely. Every celebration is unique, and we are happy to customize our services to create an experience that reflects your vision.",
    },
    {
        question: "How do I reserve my date?",
        answer:
            "Submit an inquiry through our website. We will reach out to discuss your event, answer your questions, and guide you through the booking process.",
    },
    {
        question: "What is included with your services?",
        answer:
            "Each package is tailored to your event. During your consultation, we will discuss your vision and recommend the services and details that best fit your celebration.",
    },
];

const listContainer = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger(0.08, {
                startDelay: 0.15,
            }),
        },
    },
};

const listItem = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenIndex((currentIndex) =>
            currentIndex === index ? null : index,
        );
    };

    return (
        <section
            id="faq"
            className="relative overflow-hidden bg-[#fbf7f2fc] px-6 lg:px-10 lg:py-18"
        >
            {/* Decorative background details */}
            <div
                aria-hidden="true"
                className="absolute -left-28 top-24 h-56 w-56 rounded-full border border-[#c5a065]/10"
            />

            <div
                aria-hidden="true"
                className="absolute -right-24 bottom-20 h-48 w-48 rounded-full border border-[#d98f82]/10"
            />

            <div className="relative mx-auto max-w-5xl">
                {/* Heading */}
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
                        Frequently Asked Questions
                    </p>

                    {/* Metallic divider */}
                    <div className="mx-auto my-7 flex max-w-[320px] items-center gap-4">
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
                            className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-sm text-transparent"
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
                        Everything You Need
                        <br />
                        To Know
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#756e69] sm:text-lg sm:leading-8">
                        We have answered a few of our most common questions, but
                        we are always happy to help if you need anything else.
                    </p>
                </motion.div>

                {/* Questions */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={listContainer}
                    className="mt-14 border-t border-[#d8bd8c]/35 lg:mt-18"
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const answerId = `faq-answer-${index}`;

                        return (
                            <motion.article
                                key={faq.question}
                                variants={listItem}
                                className="border-b border-[#d8bd8c]/35"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleQuestion(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={answerId}
                                    className="group flex w-full items-center justify-between gap-6 py-7 text-left sm:py-8"
                                >
                                    <span className="font-heading text-xl font-medium leading-snug text-[#3f3a37] transition-colors duration-300 group-hover:text-[#9b7945] sm:text-2xl">
                                        {faq.question}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#c5a065]/55 text-[#9b7945] transition duration-300 group-hover:border-[#b88941] group-hover:bg-[#f8eed8]/50"
                                    >
                                        <span className="absolute h-px w-3.5 bg-current" />

                                        <motion.span
                                            animate={{
                                                rotate: isOpen ? 90 : 0,
                                                opacity: isOpen ? 0 : 1,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                                ease: "easeOut",
                                            }}
                                            className="absolute h-3.5 w-px bg-current"
                                        />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            id={answerId}
                                            initial={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{
                                                height: 0,
                                                opacity: 0,
                                            }}
                                            transition={{
                                                height: {
                                                    duration: 0.35,
                                                    ease: [0.22, 1, 0.36, 1],
                                                },
                                                opacity: {
                                                    duration: 0.25,
                                                },
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <p className="max-w-3xl pb-8 pr-10 leading-7 text-[#756e69] sm:text-lg sm:leading-8">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.article>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}