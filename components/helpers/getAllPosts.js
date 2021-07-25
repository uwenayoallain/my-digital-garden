import { frontMatter as allPosts } from "../../pages/**/*.mdx";
import { sortByDate } from "../../utils";
import PostLooper from "../blog/PostLooper";

export default function Posts({ posts }) {
    return (

        <PostLooper
            posts={posts}
            size={3}
            className='text-center'
        />
    )
}

export async function getStaticProps() {
    const posts = await allPosts.map(post => {
        return {
            path: post.path,
            title: post.title,
            date: post.date,
            excerpt: post.excerpt,
            by: post.by,
            readingTime: post.time.text,
            words: post.time.words,
        }
    });
    return {
        props: {
            posts: JSON.stringify(posts.sort(sortByDate)),
        },
    }
}