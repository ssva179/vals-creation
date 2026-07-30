import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { galleryCollections } from "@/data/galleryCollections";

type CollectionPageProps = {
    params: Promise<{
        collection: string;
    }>;
};

export function generateStaticParams() {
    return Object.keys(galleryCollections).map((collection) => ({
        collection,
    }));
}

export default async function CollectionPage({
                                                 params,
                                             }: CollectionPageProps) {
    const { collection } = await params;
    const currentCollection = galleryCollections[collection];

    if (!currentCollection) {
        notFound();
    }

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#fffdfa]">
                {/* Collection heading */}
                <section className="px-6 pb-12 pt-36 lg:px-10 lg:pb-16 lg:pt-40">
                    <div className="mx-auto max-w-7xl">
                        <Link
                            href="/gallery"
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-[#8f6b2d]
                                transition-colors
                                duration-300
                                hover:text-[#654617]
                            "
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={1.8}
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m15 18-6-6 6-6"
                                />
                            </svg>

                            Back to Gallery
                        </Link>

                        <div className="mt-10 max-w-3xl">
                            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                                {currentCollection.eyebrow}
                            </p>

                            <h1 className="font-heading mt-4 text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] sm:text-5xl lg:text-6xl">
                                {currentCollection.title}
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-7 text-[#706965] sm:text-lg sm:leading-8">
                                {currentCollection.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Media grid */}
                <section className="px-6 pb-24 lg:px-10 lg:pb-32">
                    <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {currentCollection.media.map((item, index) => (
                            <article
                                key={`${item.src}-${index}`}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-[24px]
                                    border
                                    border-[#d8bd8c]/35
                                    bg-white
                                    p-3
                                    shadow-[0_16px_45px_rgba(92,65,45,0.07)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:border-[#c5a065]/65
                                    hover:shadow-[0_22px_58px_rgba(92,65,45,0.12)]
                                "
                            >
                                <div
                                    className="
                                        relative
                                        aspect-[4/5]
                                        overflow-hidden
                                        rounded-[17px]
                                        border
                                        border-[#d8bd8c]/25
                                        bg-[#f8f3ed]
                                    "
                                >
                                    {item.type === "image" ? (
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="
                                                object-cover
                                                transition-all
                                                duration-700
                                                group-hover:scale-[1.025]
                                                group-hover:brightness-[1.025]
                                            "
                                        />
                                    ) : (
                                        <video
                                            controls
                                            playsInline
                                            preload="metadata"
                                            poster={item.poster}
                                            className="h-full w-full object-cover"
                                        >
                                            <source src={item.src} />

                                            Your browser does not support the
                                            video element.
                                        </video>
                                    )}

                                    {item.title && (
                                        <>
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2b241f]/60 via-transparent to-transparent" />

                                            <div className="pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-5 pt-20">
                                                <h2 className="font-heading text-xl font-medium tracking-[-0.02em] text-white">
                                                    {item.title}
                                                </h2>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Inquiry CTA */}
                <section className="border-y border-[#d8bd8c]/30 bg-[#fbf7f2] px-6 py-16 lg:px-10 lg:py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                            Interested in This Experience?
                        </p>

                        <h2 className="font-heading mt-4 text-3xl font-medium tracking-[-0.03em] text-[#3f3a37] sm:text-4xl">
                            Let&apos;s Plan Something Memorable
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl leading-7 text-[#706965] sm:text-lg sm:leading-8">
                            Share your event date, guest count, preferred
                            experience, and any ideas you would like Val&apos;s
                            Creations to bring to life.
                        </p>

                        <Link
                            href="/inquiry"
                            className="
                                mt-8
                                inline-flex
                                items-center
                                justify-center
                                rounded-sm
                                bg-[#c48276]
                                px-8
                                py-4
                                text-sm
                                font-semibold
                                uppercase
                                tracking-[0.14em]
                                text-white
                                transition
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[#cb7f79]
                            "
                        >
                            Start Your Inquiry
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}