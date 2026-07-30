import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const galleryCollections = [
    {
        title: "Food Cart Experiences",
        description:
            "Paleta carts, charcuterie displays, cotton candy, elote, Dubai chocolate, mini pancakes, and more.",
        image: "/images/gallery/minip.jpg",
        href: "/gallery/food-carts",
        count: "Food and dessert experiences",
    },
    {
        title: "Interactive Experiences",
        description:
            "Bloom bars, onesie decorating stations, and personalized guest experiences.",
        image: "/images/gallery/onesie.png",
        href: "/gallery/interactive-experiences",
        count: "Interactive event stations",
    },
    {
        title: "Marquee Letters",
        description:
            "Illuminated GRAD letters and number displays for birthdays, graduations, anniversaries, and celebrations.",
        image: "/images/gallery/marquee.png",
        href: "/gallery/marquee-letters",
        count: "GRAD and numbers 0–9",
    },
    {
        title: "Event Details",
        description:
            "Custom dessert displays, coordinated styling, signage, and thoughtful finishing touches.",
        image: "/images/gallery/event.png",
        href: "/gallery/event-details",
        count: "Custom celebration details",
    },
];

export default function GalleryPage() {
    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#fffdfa]">
                {/* Gallery introduction */}
                <section className="px-6 pb-12 pt-36 lg:px-10 lg:pb-16 lg:pt-40">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                            Our Work
                        </p>

                        <h1 className="font-heading mt-4 text-4xl font-medium leading-tight tracking-[-0.03em] text-[#3f3a37] sm:text-5xl lg:text-6xl">
                            Explore Our Event Collections
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#706965] sm:text-lg sm:leading-8">
                            Browse photos and videos from our food carts,
                            interactive experiences, marquee displays, and custom
                            event details.
                        </p>
                    </div>
                </section>

                {/* Gallery collections */}
                <section className="px-6 pb-24 lg:px-10 lg:pb-32">
                    <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2">
                        {galleryCollections.map((collection) => (
                            <Link
                                key={collection.href}
                                href={collection.href}
                                className="group block"
                            >
                                <article
                                    className="
                                        h-full
                                        overflow-hidden
                                        rounded-[26px]
                                        border
                                        border-[#d8bd8c]/35
                                        bg-white
                                        p-4
                                        shadow-[0_18px_55px_rgba(92,65,45,0.08)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-[#c5a065]/65
                                        hover:shadow-[0_24px_65px_rgba(92,65,45,0.12)]
                                    "
                                >
                                    {/* Image */}
                                    <div
                                        className="
                                            relative
                                            aspect-[5/4]
                                            overflow-hidden
                                            rounded-[18px]
                                            border
                                            border-[#d8bd8c]/25
                                            bg-[#f8f3ed]
                                        "
                                    >
                                        <Image
                                            src={collection.image}
                                            alt={`${collection.title} gallery`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                            className="
                                                object-cover
                                                transition-all
                                                duration-700
                                                group-hover:scale-[1.025]
                                                group-hover:brightness-[1.03]
                                            "
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-[#2b241f]/60 via-black/10 to-transparent" />

                                        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-20 sm:px-7 sm:pb-7">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/80">
                                                {collection.count}
                                            </p>

                                            <h2 className="font-heading mt-2 text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl">
                                                {collection.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col px-2 pb-2 pt-5 sm:px-3 sm:pt-6">
                                        <p className="text-sm leading-6 text-[#706965] sm:text-[15px]">
                                            {collection.description}
                                        </p>

                                        <div className="mt-4 flex items-center justify-between border-t border-[#d8bd8c]/25 pt-4">
                                            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f6b2d]">
                                                Explore Collection
                                            </span>

                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.8}
                                                className="h-5 w-5 text-[#a77b35] transition-transform duration-300 group-hover:translate-x-1.5"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 12h14M13 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Inquiry call to action */}
                <section className="border-y border-[#d8bd8c]/30 bg-[#fbf7f2] px-6 py-16 lg:px-10 lg:py-20">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c48276]">
                            Have Something in Mind?
                        </p>

                        <h2 className="font-heading mt-4 text-3xl font-medium tracking-[-0.03em] text-[#3f3a37] sm:text-4xl">
                            Let&apos;s Create Your Celebration
                        </h2>

                        <p className="mx-auto mt-6 max-w-xl leading-7 text-[#706965] sm:text-lg sm:leading-8">
                            Tell us about your event, preferred experience, guest
                            count, and any ideas you would like us to bring to
                            life.
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