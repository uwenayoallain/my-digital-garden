
import { blogPosts, sortedPosts } from "@/utils/recoil";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Post from "./Post";

export default function PostLooper({ posts, defaultSize = 3, nomore = false, feacturedposts = false, sortButton = false }) {
    const [updatedpostsState, setUpdatedpostsState] = useRecoilState(blogPosts);
    setUpdatedpostsState(posts);
    const sorts = ["date", "views"];
    const [sort, setSort] = useState(sorts[0]);
    const [size, setSize] = useState(defaultSize);
    const sortedblogPosts = useRecoilValue(sortedPosts(sort));
    const filteredPosts = (sortedblogPosts.slice(0, size));

    return (
        <div>
            <div>
                <button className="block m-auto w-max my-2 py-2  px-5 rounded-full border bg-gray-900 text-white dark:bg-white dark:text-black ring-0 transition hover:ring-4 hover:ring-gray-900 dark:hover:ring-gray-700" onClick={() => setSort(!sort || sort === sorts[0] ? sorts[1] : sorts[0])}>
                    {sort === sorts[0] ? "sorting by newest" : "sorting by most popular"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 rotate-0 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-3 w-full h-full py-4 px-0.5 mb-5">
                {filteredPosts.map(post => {
                    const { title, slug, excerpt, by, date, readingTime, counts } = post.frontMatter;
                    const postPath = `blog/${slug}`;
                    return (
                        <div key={slug} className="mb-3 m-1" >
                            <Post
                                title={title}
                                path={postPath}
                                excerpt={excerpt}
                                by={by}
                                counts={counts}
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
        </div>
    )
}
