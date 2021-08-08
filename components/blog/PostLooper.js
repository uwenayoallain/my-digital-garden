
import { getPageViews, usePageViews } from "@/hooks/useCountpageviews";
import { useEffect, useState } from "react";
import { FormSearchInput } from "../simplifiers/Form";
import Looper, { TagsLooper } from "../simplifiers/Looper";
import Post from "./Post";

export default function PostLooper({ posts, defaultSize = 3, nomore = false, feacturedposts = false }) {
    const [blogPosts, setblogPosts] = useState(posts);
    const sorts = ["date", "views"];
    const [sort, setSort] = useState(sorts[0]);
    useEffect(() => {
        if (sort === sorts[0]) {
            setblogPosts(posts.slice().sort((a, b) => { return new Date(b.frontMatter.date) - new Date(a.frontMatter.date) }))
        } else if (sort === sorts[1]) {
            setblogPosts(posts.slice().sort((a, b) => { return Number(b.frontMatter.counts) - Number(a.frontMatter.counts) }));
        }
    }, [sort, posts]);

    const tags = posts.map(post => post.frontMatter.tags.toString());
    const uniqueTags = [...new Set([tags].toString().trim().split(','))]
    const [size, setSize] = useState(defaultSize);
    const filteredPosts = (blogPosts.slice(0, size));
    const [search, setSearch] = useState('');
    const handleSearchingByTags = (tags) => {
        setSearch(tags.trimStart().trimEnd())
    }
    console.log(search);
    return (
        <div>
            <div className="w-1/2">
                <FormSearchInput value={search} onChange={(e) => setSearch(e.target.value)} type="search" label="Search the blog" />
            </div>
            <div className="w-full m-5">
                <TagsLooper elements={uniqueTags} searchContent={handleSearchingByTags} />
            </div>
            <div>
                <button className="block px-5 py-2 m-auto my-2 text-white transition bg-gray-900 border border-white rounded-full w-max dark:border-gray-900 dark:bg-white dark:text-black ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-white" onClick={() => setSort(!sort || sort === sorts[0] ? sorts[1] : sorts[0])}>
                    {sort === sorts[0] ? "sorting by newest" : "sorting by most popular"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 transition rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                </button>
            </div>
            <div className="grid grid-cols-3 w-full h-full py-4 px-0.5 mb-5">
                {filteredPosts.map(post => {
                    const { title, slug, excerpt, by, date, readingTime, counts } = post.frontMatter;
                    const postPath = `blog/${slug}`;
                    return (
                        <div key={slug} className="m-1 mb-3" >
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
                filteredPosts.length < posts.length && !nomore ? <button className="block px-4 py-3 mx-auto mt-10 mb-5 text-white transition bg-gray-900 border rounded-full w-max dark:bg-white dark:text-black ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-gray-700 " onClick={() => { return setSize(10) }} >all posts</button> : ''
            }
        </div>
    )
}
