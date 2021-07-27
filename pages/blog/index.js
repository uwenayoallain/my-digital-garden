import marked from 'marked';
import { useState } from 'react';
import Post from '@/components/blog/Post';
import Header from "@/components/blog/Header";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Blockquote from '@/components/blog/Quote';
import Container from '@/components/simplifiers/Container';
import Fetcher from '@/lib/fetcher';
import PostLooper from '@/components/blog/PostLooper';
export default function Blog({ posts }) {
    // const [size, setSize] = useState(2);
    // const filteredPosts = posts.slice(0, size);
    return (
        <Container>
            <div>
                <Header />
                <h1 className='text-center text-5xl font-extrabold my-10 capitalize'>
                    Personal Blog
                </h1>
                <p className='text'>This is my digital home, where I write about the things I'm working on and share what I've learned.</p>
            </div>

            <div >
                {/* {filteredPosts.map(post => {
                    const { title, slug, excerpt, by, date, readingTime } = post.frontMatter;
                    return (
                        <Post
                            title={title}
                            slug={slug}
                            key={slug}
                            excerpt={excerpt}
                            by={by}
                            readingTime={readingTime.text}
                            words={readingTime.words}
                            date={date} />
                    )
                })}
                {
                    filteredPosts.length < posts.length ? <button className="link capitalize" onClick={() => setSize(posts.length)} >all posts</button> : ''
                } */}
                <PostLooper posts={posts} defaultSize={2} />
            </div>
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllFilesFrontMatter();
    return {
        props: {
            posts
        },
    }
}