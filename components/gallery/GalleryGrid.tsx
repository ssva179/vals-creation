"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryImage = {
    type: "image";
    src: string;
    alt: string;
    title?: string;
    position?: string;
};

type GalleryVideo = {
    type: "video";
    src: string;
    title?: string;
    poster?: string;
};

type GalleryItem = GalleryImage | GalleryVideo;

type GalleryGridProps = {
    media: GalleryItem[];
};

export default function GalleryGrid({
                                        media,
                                    }: GalleryGridProps) {
    const [selectedIndex, setSelectedIndex] =
        useState<number | null>(null);

    const selectedItem =
        selectedIndex !== null
            ? media[selectedIndex]
            : null;

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        if (selectedIndex === null) {
            return;
        }

        let nextIndex =
            selectedIndex === 0
                ? media.length - 1
                : selectedIndex - 1;

        while (
            media[nextIndex].type !== "image" &&
            nextIndex !== selectedIndex
            ) {
            nextIndex =
                nextIndex === 0
                    ? media.length - 1
                    : nextIndex - 1;
        }

        if (media[nextIndex].type === "image") {
            setSelectedIndex(nextIndex);
        }
    };

    const showNext = () => {
        if (selectedIndex === null) {
            return;
        }

        let nextIndex =
            selectedIndex === media.length - 1
                ? 0
                : selectedIndex + 1;

        while (
            media[nextIndex].type !== "image" &&
            nextIndex !== selectedIndex
            ) {
            nextIndex =
                nextIndex === media.length - 1
                    ? 0
                    : nextIndex + 1;
        }

        if (media[nextIndex].type === "image") {
            setSelectedIndex(nextIndex);
        }
    };

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
            }

            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener(
            "keydown",
            handleKeyDown,
        );

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener(
                "keydown",
                handleKeyDown,
            );
        };
    }, [selectedIndex]);

    return (
        <>
            <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {media.map((item, index) => (
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
                                <button
                                    type="button"
                                    aria-label={`Open ${item.alt}`}
                                    onClick={() =>
                                        setSelectedIndex(
                                            index,
                                        )
                                    }
                                    className="absolute inset-0 cursor-zoom-in"
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        style={{
                                            objectPosition:
                                                item.position ??
                                                "center",
                                        }}
                                        className="
                                            object-cover
                                            transition-all
                                            duration-700
                                            group-hover:scale-[1.025]
                                            group-hover:brightness-[1.025]
                                        "
                                    />
                                </button>
                            ) : (
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    poster={item.poster}
                                    className="h-full w-full object-cover"
                                >
                                    <source src={item.src} />

                                    Your browser does not
                                    support the video
                                    element.
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

            {selectedItem?.type === "image" && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Expanded gallery image"
                    onClick={closeLightbox}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#a96f66]/40 px-4 py-6 backdrop-blur-sm"
                >
                    <button
                        type="button"
                        aria-label="Close image"
                        onClick={closeLightbox}
                        className="
        absolute
        right-5
        top-5
        z-30
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-black/20
        text-white
        transition
        hover:bg-black/40
    "
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 6l12 12M18 6 6 18"
                            />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Previous image"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        className="
        absolute
        left-3
        top-1/2
        z-20
        flex
        h-11
        w-11
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-black/20
        text-white
        transition
        hover:bg-black/40
        sm:left-6
    "
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m15 18-6-6 6-6"
                            />
                        </svg>
                    </button>

                    <div
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                        className="relative h-[85vh] w-full max-w-6xl"
                    >
                        <Image
                            src={selectedItem.src}
                            alt={selectedItem.alt}
                            fill
                            priority
                            sizes="100vw"
                            className="object-contain"
                        />
                    </div>

                    <button
                        type="button"
                        aria-label="Next image"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        className="
        absolute
        right-3
        top-1/2
        z-20
        flex
        h-11
        w-11
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        border
        border-white/30
        bg-black/20
        text-white
        transition
        hover:bg-black/40
        sm:right-6
    "
                    >
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.2}
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m9 6 6 6-6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}