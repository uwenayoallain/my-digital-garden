import Header from "@/components/blog/Header";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/simplifiers/Container';
import PostLooper from '@/components/blog/PostLooper';
export default function Blog({ posts }) {
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
                <PostLooper posts={posts} defaultSize={3} />
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