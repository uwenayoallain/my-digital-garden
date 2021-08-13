import Section, { Handler } from "@/components/blog/Section";
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
        <Handler>
          <Heading>Featured Posts</Heading>
          <SubHeading>
            Featured posts are blog posts with higher visibility and they are
            more important than regular posts.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#featured-posts' />
          </SubHeading>
        </Handler>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
      </Section>
      <Section title='featured-posts' className='!h-auto pb-10'>
        <div className='w-full h-full'>
          <PostLooper posts={posts} nomore feacturedposts />
        </div>
      </Section>
      <Section title='actions'>
        <Handler>
          <Heading>Action Tracker</Heading>
          <SubHeading>
            I&apos;m just going to develop an action tracker for my open source
            projects just as a reminder and personal monitoring. check more
            about how the action tracker works here.
            <InnerLink
              href='/opensource/action-tracker'
              content='More about how i track my actions'
            />
          </SubHeading>
        </Handler>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
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
