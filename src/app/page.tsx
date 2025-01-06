import Hero from "@/components/Hero/Hero"
import BlogListing from "@/components/BlogListing/BlogListing"

export default function Home() {
    return (
        <div className="home-page">
            <div className="inner">
                <Hero />

                <BlogListing title="Recent blogs" stack={true} limit={3} />
            </div>
        </div>
    )
}