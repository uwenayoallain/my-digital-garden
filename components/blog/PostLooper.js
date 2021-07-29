import { usePageViews } from "@/hooks/useCountpageviews";
import { useState } from "react";
import Post from "./Post";

export default function PostLooper({ posts, defaultSize = 3 }) {
    const [size, setSize] = useState(defaultSize);
    const filteredPosts = (posts.slice(0, size)).sort((a, b) => { return new Date(b.frontMatter.date) - new Date(a.frontMatter.date) });
    return (
        <div>
            {filteredPosts.map(post => {
                const { title, slug, excerpt, by, date, readingTime } = post.frontMatter;
                const postPath = `blog/${slug}`;
                return (
                    <Post
                        title={title}
                        path={postPath}
                        key={slug}
                        excerpt={excerpt}
                        by={by}
                        readingTime={readingTime.text}
                        words={readingTime.words}
                        date={date} />
                )
            })}
            {
                filteredPosts.length < posts.length ? <button className="link capitalize" onClick={() => { return setSize(10) }} >all posts</button> : ''
            }
        </div>
    )
}
