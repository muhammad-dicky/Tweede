import NavItem from "./NavItem";
import { useState } from "react";

export default function Nav() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <nav className="lg:flex lg:justify-end lg:space-x-9 lg:px-7">
            {/* Navigasi untuk tampilan desktop */}
            <ul className="hidden lg:flex space-x-9">
                <li><a href="#"><NavItem>Home</NavItem></a></li>
                <li><a href="/about"><NavItem>Tentang Kami</NavItem></a></li>
                <li><a href="#"><NavItem>Layanan</NavItem></a></li>
                <li><a href="#"><NavItem>Ulasan</NavItem></a></li>
            </ul>

            {/* Tombol Navigasi untuk tampilan mobile */}
            <div className="lg:hidden flex justify-end mr-4">
                <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className={`border rounded p-2 ${mobileNavOpen ? "bg-gray-200" : ""}`}
                    style={{
                        transition: "background-color 0.3s ease, transform 0.2s ease", // Menggabungkan dua animasi
                        transform: mobileNavOpen ? "scale(0.95)" : "scale(1)",
                    }}
                >
                    <span className="animate-pulse">Menu</span>
                </button>
                {mobileNavOpen && (
                    <ul className="mt-2 space-y-2">
                        <li><a href="#"><NavItem>Home</NavItem></a></li>
                        <li><a href="/about"><NavItem>Tentang Kami</NavItem></a></li>
                        <li><a href="#"><NavItem>Layanan</NavItem></a></li>
                        <li><a href="#"><NavItem>Ulasan</NavItem></a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
