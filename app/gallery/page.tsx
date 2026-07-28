import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const galleryCollections = [
    {
        title: "Food Cart Experiences",
        description:
            "Explore our paleta carts, charcuterie displays, cotton candy, elote, Dubai chocolate, waffle sticks, and more.",
        image: "/images/gallery/paleta-cart.jpg",
        href: "/gallery/food-carts",
        count: "Food and dessert experiences",
    },
    {
        title: "Interactive Experiences",
        description:
            "Browse interactive setups such as our bloom bar, onesie decorating station, candy bar, and custom guest experiences.",
        image: "/images/gallery/bloom-bar.jpg",
        href: "/gallery/interactive-experiences",
        count: "Interactive event stations",
    },
    {
        title: "Marquee Letters",
        description:
            "See our illuminated GRAD letters and number displays styled for graduations, birthdays, anniversaries, and celebrations.",
        image: "/images/gallery/grad-letters.jpg",
        href: "/gallery/marquee-letters",
        count: "GRAD and numbers 0–9",
    },
    {
        title: "Event Details",
        description:
            "Discover the custom touches, coordinated styling, signage, and thoughtful details that complete each event.",
        image: "/images/gallery/event-details.jpg",
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
                <section className="px-6 pb-14 pt-32 lg:px-10 lg:pb-20 lg:pt-32">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a77b35]">
                            Our Work
                        </p>

                        <h1 className="mt-4 text-4xl font-medium leading-tight text-[#403936] sm:text-5xl lg:text-6xl">
                            Explore Our Event Collections
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#7b716b] sm:text-lg">
                            Browse photos and videos from our food carts,
                            interactive experiences, marquee displays, and
                            custom event details.
                        </p>
                    </div>
                </section>

                {/* Clickable gallery collections */}
                <section className="px-6 pb-24 lg:px-10 lg:pb-32">
                    <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2">
                        {galleryCollections.map((collection) => (
                            <Link
                                key={collection.href}
                                href={collection.href}
                                className="group block"
                            >
                                <article className="h-full overflow-hidden border border-[#d8bd8c]/40 bg-white shadow-[0_18px_55px_rgba(92,65,45,0.08)] transition duration-500 hover:-translate-y-1 hover:border-[#c5a065]/70 hover:shadow-[0_24px_65px_rgba(92,65,45,0.13)]">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f3ed]">
                                        <Image
                                            src={collection.image}
                                            alt={`${collection.title} gallery`}
                                            fill
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-[1.035]"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

                                        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-20 sm:px-7 sm:pb-7">
                                            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                                                {collection.count}
                                            </p>

                                            <h2 className="mt-2 text-2xl font-medium text-white sm:text-3xl">
                                                {collection.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex h-full flex-col px-6 py-6 sm:px-7 sm:py-7">
                                        <p className="flex-1 text-sm leading-7 text-[#776e68] sm:text-base">
                                            {collection.description}
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-[#d8bd8c]/25 pt-5">
                                            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8f6b2d]">
                                                Explore Collection
                                            </span>

                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.8}
                                                className="h-5 w-5 text-[#a77b35] transition-transform duration-300 group-hover:translate-x-1"
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
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a77b35]">
                            Have Something in Mind?
                        </p>

                        <h2 className="mt-4 text-3xl font-medium text-[#403936] sm:text-4xl">
                            Let&apos;s Create Your Celebration
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl leading-7 text-[#7b716b]">
                            Tell us about your event, preferred experience, guest
                            count, and any ideas you would like us to bring to
                            life.
                        </p>

                        <Link
                            href="/inquiry"
                            className="mt-8 inline-flex items-center justify-center rounded-sm bg-[#c48276] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cb7f79]"
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
