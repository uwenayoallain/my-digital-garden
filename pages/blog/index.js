import Header from "@/components/blog/Header";
import { getAllFilesFrontMatter } from '@/lib/mdx';
import Container from '@/components/simplifiers/Container';
import PostLooper from '@/components/blog/PostLooper';
import Section from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import ArrowLink from "@/components/common/ArrowLink";
export default function Blog({ posts }) {
    return (
        <Container>
            <Section>
                <div className="w-1/2 h-3/4">
                    <Heading>
                        My digital Garden as a developer
                    </Heading>
                    <SubHeading>
                        This is my personal blog, where I write about the things I'm working on and share what I've learned.
                        <ButtonLinks />
                        <ArrowLink direction="bottom" to="#posts" />
                    </SubHeading>
                </div>
                <div className='w-1/2 h-full'>
                </div>
            </Section>
            <Section title="posts" className="!h-auto pb-10">
                <div className='w-full h-full'>
                    <PostLooper posts={posts} defaultSize={3} sortButton />
                </div>
            </Section>
            <Section title="about" bg="dark:bg-gray-800 bg-gray-50">
                <div className="w-1/2 h-full">
                </div>
                <div className="w-1/2 h-3/4">
                    <Heading>Every one has a life story to share,me too.</Heading>
                    <SubHeading>
                        You're interested in my life story , as a dev?,check out my programming life story.and learn <strong>problems</strong> a faced and who i overcame them.
                        <InnerLink href="/life" content="Read more here" />
                    </SubHeading>
                </div>
            </Section>
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