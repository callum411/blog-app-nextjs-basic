import BlogListing from "@/components/BlogListing/BlogListing";

import './blogListingPage.css';

export default function Blogs() {
    return (
        <div className="blog-listing-page">
            <div className="inner">
                <h1>Blogs</h1>
                <BlogListing />
            </div>
        </div>
    );
}