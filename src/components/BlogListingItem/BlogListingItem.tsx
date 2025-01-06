import Link from "next/link";

import BlogPost from "@/interfaces/BlogPost";

import { convertToSentence } from "@/utils/helpers";

import './BlogListingItem.css';

export default function BlogListingItem({ id, title, body }: BlogPost) {
    return (
        <div className="blog-listing-item" data-id={id}>
            <img src={"https://placehold.co/250x100/EEE/31343C?text=" + title.substring(0, 1).toUpperCase()} width={250} height={100} alt={convertToSentence(title)} />
            <div className="blog-listing-content">
                <h2>{convertToSentence(title)}</h2>
                <p>{convertToSentence(body)}</p>
                <Link href={"/blogs/" + id}>Read more</Link>
            </div>
        </div>
    )
}