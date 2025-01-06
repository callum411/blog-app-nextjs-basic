"use client"

import Link from "next/link"

import './header.css';
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
 
    return (
        <header>
            <div className="inner">
                <img src="https://placehold.co/400x400/EEE/31343C?text=BA" alt="Blog App" width={50} height={50} />
                <nav>
                    <ul>
                        <li><Link className={pathname === "/" ? "active" : ""} href="/">Home</Link></li>
                        <li><Link className={pathname.startsWith("/blogs") ? "active" : ""} href="/blogs">Blog</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}