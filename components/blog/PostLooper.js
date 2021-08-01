import { usePageViews } from "@/hooks/useCountpageviews";
import { useState } from "react";
import Post from "./Post";

export default function PostLooper({ posts, defaultSize = 3, nomore = false }) {
    const [size, setSize] = useState(defaultSize);
    const filteredPosts = (posts.slice(0, size)).sort((a, b) => { return new Date(b.frontMatter.date) - new Date(a.frontMatter.date) });
    return (
        <>
            <div className="grid grid-cols-3 w-full h-full py-4 px-1 mb-5">
                {filteredPosts.map(post => {
                    const { title, slug, excerpt, by, date, readingTime } = post.frontMatter;
                    const postPath = `blog/${slug}`;
                    return (
                        <div key={slug} className="m-3" >
                            <Post
                                title={title}
                                path={postPath}
                                excerpt={excerpt}
                                by={by}
                                readingTime={readingTime.text}
                                words={readingTime.words}
                                date={date} />
                        </div>
                    )
                })}
            </div>
            {
                filteredPosts.length < posts.length && !nomore ? <button className="block mx-auto mt-10 mb-5 w-max py-3 px-4 rounded-full border bg-gray-900 text-white dark:bg-white dark:text-black ring-0 transition hover:ring-4 hover:ring-gray-900 dark:hover:ring-gray-700 " onClick={() => { return setSize(10) }} >all posts</button> : ''
            }
        </>
    )
}
