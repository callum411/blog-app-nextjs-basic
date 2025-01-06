import BlogPost from "@/interfaces/BlogPost"
import Link from "next/link";
import { convertToSentence } from "@/utils/helpers";

import './blogPage.css';

export default async function BlogPage({ params }: { params: { id: string } }) {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
    const blog: BlogPost = await data.json();

    if (!blog) return <>
        <h1>Sorry</h1>
        <p>We couldn't find that blog post!</p>

        <Link href="/blogs" className="btn">Back to all blogs</Link>
    </>

    return (
        <div className="blog-page">
            <div className="inner">
                <img src={"https://placehold.co/250x100/EEE/31343C?text=" + blog.title.substring(0, 1).toUpperCase()} width={250} height={100} alt={convertToSentence(blog.title)} />
                <div className="blog-listing-content">
                    <h1>{convertToSentence(blog.title)}</h1>
                    <p>{convertToSentence(blog.body)}</p>

                    <Link href="/blogs" className="btn">Back to all blogs</Link>
                </div>
            </div>
        </div>
    )
}
