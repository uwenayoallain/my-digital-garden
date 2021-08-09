import Section from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import { ButtonLinks } from "@/components/common/innerLink";
import PostLooper from "@/components/blog/PostLooper";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import InnerLink from "@/components/common/innerLink";
import PageLayout from "@/layouts/page";
import ImageHolder from "@/components/common/ImageHolder";
import Demo from "@/public/images/demo.png";

export default function FeaturedPosts({ posts }) {
  return (
    <PageLayout>
      <Section title='heading'>
        <div className='w-1/2 h-3/4'>
          <Heading>I'm uwenayoallain</Heading>
          <SubHeading>
            I am a developer, a blogger and an open source lover based in Rwanda
            . This is my digital garden, where I write about the things I'm
            working on and share what I've learned.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#about' />
          </SubHeading>
        </div>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
      </Section>
      <Section title='more' className='!h-auto pb-10'>
        <div className='w-full h-full'>
          <PostLooper posts={posts} nomore feacturedposts />
        </div>
      </Section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter();
  return {
    props: {
      posts: posts,
    },
  };
}
