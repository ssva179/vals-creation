import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-b-4 border-[#d8bd8c]/30 bg-[#fffdfa]">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-6 py-10">

                {/* Instagram Handle*/}
                <Link
                    href="https://www.instagram.com/vals_creations.partyrentals"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Val's Creations on Instagram"
                    className="flex items-center gap-2 text-[#c48276] transition-colors hover:text-[#a96f66]"
                >
                    <FaInstagram size={22} />
                    <span className="font-sans text-sm font-medium">
                        @vals_creations.partyrentals
                    </span>
                </Link>
                <p className="font-sans text-xs tracking-wide text-[#6f6662]">
                    © {new Date().getFullYear()} {" "}Val&apos;s Creations. All rights reserved.
                </p>
            </div>
        </footer>
    );
}