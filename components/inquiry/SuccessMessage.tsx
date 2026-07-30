"use client";

import Link from "next/link";
import { motion } from "motion/react";

type SuccessMessageProps = {
    onReset: () => void;
};

export default function SuccessMessage({
                                           onReset,
                                       }: SuccessMessageProps) {
    return (
        <section className="bg-[#fbf7f2fc] px-6 py-24 lg:px-10 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-2xl border border-[#d8bd8c]/45 bg-[#fbf7f2] px-7 py-14 text-center shadow-[0_20px_55px_rgba(92,65,45,0.1)] sm:px-12 sm:py-16"
            >
                <span
                    aria-hidden="true"
                    className="bg-gradient-to-b from-[#fff2b8] via-[#e6c15a] to-[#8f6729] bg-clip-text text-3xl text-transparent"
                >
                    ✦
                </span>

                <h2 className="mt-5 font-heading text-3xl font-medium text-[#3f3a37] sm:text-4xl">
                    Thank You for Reaching Out
                </h2>

                <p className="mx-auto mt-5 max-w-lg leading-7 text-[#756e69]">
                    We&apos;ve received your inquiry and can&apos;t wait to
                    learn more about your celebration. We&apos;ll be in touch
                    within 24–48 hours.
                </p>

                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="inline-flex min-w-[180px] items-center justify-center rounded-sm bg-[#c48276] px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f79]"
                    >
                        Return Home
                    </Link>

                    <button
                        type="button"
                        onClick={onReset}
                        className="inline-flex min-w-[180px] items-center justify-center rounded-sm border border-[#c5a065]/60 px-7 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#8f6b2d] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f8eed8]/60"
                    >
                        Submit Another
                    </button>
                </div>
            </motion.div>
        </section>
    );
}