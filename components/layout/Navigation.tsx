"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 right-0 left-0 z-50 border-b border-[#d8bd8c]/60 bg-[#fffdfa]/95 shadow-lg shadow-black/50 backdrop-blur-md">
            <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/*Logo redirects to hero section when clicked*/}
                <Link href="/#hero" className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="relative h-24 w-20 overflow-hidden rounded-full">
                        <Image
                            src="/images/logo/logo.png"
                            alt="Val's Creations logo"
                            fill
                            sizes="96px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/*Brand and tagline */}
                    <div className="leading-tight">
                        <h1 className="font-heading text-3xl font-medium leading-none">
                            VAL&apos;S CREATIONS
                        </h1>
                        <p className="pl-1 font-sans font-semibold text-xs uppercase tracking-[0.2em] text-[#c48276]">
                             Luxury  Event  Experiences
                        </p>
                    </div>
                </Link>
                {/*Navigation to other website sections*/}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link
                        href="/#hero"
                        className="text-xl font-heading font-semibold text-[#49413d] transition-colors hover:text-[#c48276]"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="text-xl font-heading font-semibold text-[#49413d] transition-colors hover:text-[#c48276]"
                    >
                        About
                    </Link>
                    <Link
                        href="/#experiences"
                        className="text-xl font-heading font-semibold text-[#49413d] transition-colors hover:text-[#c48276]"
                    >
                        Experiences
                    </Link>
                    <Link
                        href="/gallery"
                        className="text-xl font-heading font-semibold text-[#49413d] transition-colors hover:text-[#c48276]"
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/#faq"
                        className="text-xl font-heading font-semibold text-[#49413d] transition-colors hover:text-[#c48276]"
                    >
                        FAQ
                    </Link>
                    <a
                        href="https://www.instagram.com/vals_creations.partyrentals"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Val's Creations on Instagram"
                        className="text-[#a96f66] transition-colors hover:text-[#c48276]"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                    <Link
                        href="/inquiry"
                        className="rounded-full border-2 border-[#c48276] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#a96f66] transition-colors hover:bg-[#c48276] hover:text-white"
                    >
                        Book Now
                    </Link>

                </div>

                {/* Mobile Nav Bar */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center lg:hidden"
                >
                    <span className="text-2xl text-[#c48276]">
                        {isOpen ? "✕" : "☰"}
                    </span>
                </button>

            </nav>
            {isOpen && (
                <div className="fixed inset-x-0 top-24 h-[calc(100dvh-6rem)] z-40 overflow-y-auto bg-[#dbbab4]/70 px-6 pt-16 lg:hidden">
                    <div className="flex min-h-full w-full max-w-md flex-col gap-2 -mt-8 pl-6 pb-20">
                        <Link
                            href="/#hero"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >
                            Home
                        </Link>
                        <Link
                            href="/#about"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >About
                        </Link>
                        <Link
                            href="/#experiences"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >Experiences
                        </Link>
                        <Link
                            href="/gallery"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >Gallery
                        </Link>
                        <Link
                            href="/#faq"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >FAQ
                        </Link>
                        <Link
                            href="/inquiry"
                            onClick={() => setIsOpen(false)}
                            className="font-heading text-xl md:text-2xl font-bold text-[#49413d] hover:text-[#8f5e56]"
                        >
                            Book Now
                        </Link>
                        <a
                            href="https://www.instagram.com/vals_creations.partyrentals"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Val's Creations on Instagram"
                            className="mt-15 text-[#49413d] transition-colors hover:text-[#8f5e56]"
                        >
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            )}


        </header>
    );
}