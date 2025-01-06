"use client"

import { useEffect, useState } from 'react';
import './hero.css';

export default function Hero() {
    const heroImages = {
        desktop: "https://placehold.co/1920x1080/EEE/31343C",
        mobile: "https://placehold.co/1080x1920/EEE/31343C"
    };

    const [ heroURL, setHeroURL ] = useState<string | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setHeroURL(window.innerWidth <= 900 ? heroImages.mobile : heroImages.desktop);
        };

        // Attach the event listener
        window.addEventListener("resize", handleResize);

        // Run once to set the correct image on mount
        handleResize();

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Prevent hydration mismatch by not rendering until state is set
    if (!heroURL) return null;

    return (
        <section className="hero" style={{ backgroundImage: "url('" + heroURL + "')" }}>
            <h1>Welcome to Blog App</h1>
            <p>Insights, stories, and ideas—one post at a time.</p>
        </section>
    )
}