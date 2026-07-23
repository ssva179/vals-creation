import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export default async function Home() {
    return (
        <>
            <Navigation />
            <main className="pt-20">
                <Hero />
                <About />
                <Services />
                <GalleryPreview />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </>
    );
}