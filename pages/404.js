import Section, { Handler } from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import { useRouter } from "next/router";
import ArrowLink from "@/components/common/ArrowLink";
import { ButtonLinks } from "@/components/common/innerLink";
import PostLooper from "@/components/blog/PostLooper";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import InnerLink from "@/components/common/innerLink";
import ImageHolder from "@/components/common/ImageHolder";
import Demo from "@/public/images/demo.png";

export default function Custom404({ posts }) {
  const path = useRouter();
  return (
    <>
      <Section>
        <Handler>
          <Heading>
            <span className=''>
              4<span className='text-skin-base'>0</span>4
            </span>
            <span>| Page Not Found</span>
          </Heading>
          <SubHeading>
            It looks like{" "}
            <span className='text-skin-base'>
              {" "}
              {path.asPath.trim().replace(/#.*/g, "")}{" "}
            </span>{" "}
            , the page you are looking for is not found on this domain. but dont
            worry we&apos;ve got more.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#more' />
          </SubHeading>
        </Handler>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
      </Section>
      <Section title='more' className='!h-auto pb-10'>
        <div className='w-full h-full'>
          <PostLooper posts={posts} nomore feacturedposts />
        </div>
      </Section>
      <Section title='about' bg='dark:bg-gray-800 bg-gray-50' reverse>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
        <Handler>
          <Heading>Uwenayoallain(Yarison allain)</Heading>
          <SubHeading>
            Hi there, I&apos;m a junior[maybe senior] developer and a learner at{" "}
            <a
              href='http://rca.ac.rw/'
              className='text-skin-base hover:underline'>
              Rwanda coding academy
            </a>
            , i am currently learning web techs and working on some{" "}
            <a
              href='https://github.com/uwenayoallain/opensource'
              className='text-skin-base hover:underline'>
              open source projects.
            </a>
            <InnerLink href='/about' content='More about me' />
          </SubHeading>
        </Handler>
      </Section>
    </>
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
