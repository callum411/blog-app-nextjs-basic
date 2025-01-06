import BlogPost from "@/interfaces/BlogPost";
import BlogListingItem from "@/components/BlogListingItem/BlogListingItem";

import './blogListing.css';

export default async function BlogListing({ title, limit, stack }: { title?: String, limit?: Number, stack?: Boolean }) {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + (limit === undefined ? "25" : limit));
    const blogs: BlogPost[] = await data.json();

    if (title) {
        return (
            <>
                <h2 style={{ marginTop: "30px", textAlign: "center" }}>{title}</h2>
                <div className={"blog-listing" + (stack === true ? " stacked" : "")}>
                    {blogs.map((blog, i) => {
                        return <BlogListingItem key={blog.id.toString()} {...blog} />
                    })}
                </div>
            </>
        )
    } else {
        return (
            <div className={"blog-listing" + (stack === true ? " stacked" : "")}>
                {blogs.map((blog, i) => {
                    return <BlogListingItem key={blog.id.toString()} {...blog} />
                })}
            </div>
        )
    }

    
}