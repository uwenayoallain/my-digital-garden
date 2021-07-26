import marked from 'marked';
import { useState } from 'react';
import Post from '@/components/blog/Post';
import Header from "@/components/blog/Header";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Blockquote from '@/components/blog/Quote';
import Container from '@/components/simplifiers/Container';
import Fetcher from '@/lib/fetcher';
import Head from 'next/head';
export default function Blog({ description, posts }) {
    const content = marked(description);
    const [size, setSize] = useState(2);
    const filteredPosts = posts.slice(0, size);
    return (
        <Container>
            <div>
                <Header />
                <h1 className='text-center text-5xl font-extrabold my-10 capitalize'>
                    Personal Blog
                </h1>
                <p className='text'>This is my digital home, where I write about the things I'm working on and share what I've learned.</p>
                <Blockquote otherstyles="text-left prose prose-xl" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                </Blockquote>

                <p className='text-left capitalize'>from my <a target="_blank" href="https://github.com/uwenayoallain" className='text-skin-base hover:underline'>github profile</a></p>

            </div>

            <div >
                {filteredPosts.map(post => {
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
                }
            </div>
        </Container>
    )
}

export async function getStaticProps() {

    const description = await Fetcher("https://raw.githubusercontent.com/uwenayoallain/uwenayoallain/main/README.md", "text")
    const posts = await getAllFilesFrontMatter();
    return {
        props: {
            description,
            posts
        },
    }
}