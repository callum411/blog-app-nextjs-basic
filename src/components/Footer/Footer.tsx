"use client"

import Link from "next/link"

import './footer.css';
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer>
            <div className="inner">
                <nav>
                    <ul>
                        <li><Link className={pathname === "/" ? "active" : ""} href="/">Home</Link></li>
                        <li><Link className={pathname.startsWith("/blogs") ? "active" : ""} href="/blogs">Blog</Link></li>
                    </ul>
                </nav>
                <Link href="https://www.callum-tanner.com" target="_blank" className="footer-link">Made by Callum Tanner</Link>
            </div>
        </footer>
    )
}