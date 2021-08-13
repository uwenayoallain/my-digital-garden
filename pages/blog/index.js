import Header from "@/components/blog/Header";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Container from "@/components/simplifiers/Container";
import Demo from "@/public/images/demo.png";
import PostLooper from "@/components/blog/PostLooper";
import Section, { Handler } from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import ArrowLink from "@/components/common/ArrowLink";
import Image from "next/image";
import ImageHolder from "@/components/common/ImageHolder";
export default function Blog({ posts }) {
  return (
    <Container>
      <Section>
        <Handler>
          <Heading>My digital Garden as a developer</Heading>
          <SubHeading>
            This is my personal blog, where I write about the things I&apos;m
            working on and share what I&apos;ve learned.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#posts' />
          </SubHeading>
        </Handler>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
      </Section>
      <Section title='posts' className='!h-auto pb-10'>
        <div className='w-full h-full'>
          <Heading>Blog Posts</Heading>
          <PostLooper posts={posts} />
        </div>
      </Section>
      <Section title='about' bg='dark:bg-gray-800 bg-gray-50' reverse>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
        <Handler>
          <Heading>Every one has a life story to share,me too.</Heading>
          <SubHeading>
            are you&apos;re interested in my story?,check out my story about
            programming including common drawbacks of being a programmer and how
            to overcome them.
            <InnerLink href='/life' content='Read more here' />
          </SubHeading>
        </Handler>
      </Section>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return {
    props: {
      posts,
    },
  };
}
