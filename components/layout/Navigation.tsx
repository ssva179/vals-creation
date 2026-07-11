"use client";
import Link from "next/link";
import { useState } from "react";





export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

                {/*Logo redirects to hero section when clicked*/}
                <Link href="/#hero" className="flex items-center gap-3">
                    {/* Logo Placeholder */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20">
                        V
                    </div>
                    {/*Written name and desc- later come back to change fonts etc.*/}
                    <div className="leading-tight">
                        <h1 className="text-lg font-semibold">
                            Val's Creations
                        </h1>

                        <p className="text-xs uppercase tracking-[0.18em] text-black/60">
                            Luxury Mobile Experiences
                        </p>
                    </div>
                </Link>
                {/*Navigation to other website sections*/}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/#hero"
                        //change this design for all later!!!
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                        Home
                    </Link>
                    <Link
                        href="/#about"
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                        About
                    </Link>

                    <Link
                        href="/#experiences"
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                        Experiences
                    </Link>

                    <Link
                        href="/gallery"
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                        Gallery
                    </Link>

                    <Link
                        href="/#faq"
                        className="text-sm font-medium transition-opacity hover:opacity-70"
                    >
                        FAQ
                    </Link>

                    {/* Primary Call-to-Action */}
                    <Link
                        href="/inquiry"
                        className="rounded-full border border-black px-5 py-2 text-sm font-medium transition-colors hover:bg-black hover:text-white"
                    >
                        Book Now
                    </Link>

                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center md:hidden"
                >
                    <span className="text-2xl">
                        {isOpen ? "✕" : "☰"}
                    </span>
                </button>

            </nav>
            {isOpen && (
                <div className="border-t border-black/10 bg-white px-6 py-6 md:hidden">
                    <div className="flex flex-col gap-5">
                        <Link href="/#hero" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>

                        <Link href="/#about" onClick={() => setIsOpen(false)}>
                            About
                        </Link>

                        <Link href="/#experiences" onClick={() => setIsOpen(false)}>
                            Experiences
                        </Link>

                        <Link href="/gallery" onClick={() => setIsOpen(false)}>
                            Gallery
                        </Link>

                        <Link href="/#faq" onClick={() => setIsOpen(false)}>
                            FAQ
                        </Link>

                        <Link
                            href="/inquiry"
                            onClick={() => setIsOpen(false)}
                            className="w-fit rounded-full border border-black px-5 py-2 text-sm font-medium"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            )}


        </header>
    );
}