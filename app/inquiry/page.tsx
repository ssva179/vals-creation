import InquiryHero from "@/components/inquiry/InquiryHero";
import InquiryForm from "@/components/inquiry/InquiryForm";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export default function InquiryPage() {
    return (
        <>
            <Navigation />

            <main>
                <InquiryHero />
                <InquiryForm />
            </main>

            <Footer />
        </>
    );
}