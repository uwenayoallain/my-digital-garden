import Section from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import { ButtonLinks } from "@/components/common/innerLink";
import PostLooper from "@/components/blog/PostLooper";
import InnerLink from "@/components/common/innerLink";
import PageLayout from "@/layouts/page";
import ImageHolder from "@/components/common/ImageHolder";
import Demo from "@/public/images/demo.png";
import Badge from "@/components/blog/Badge";
import Looper from "@/components/simplifiers/Looper";

export default function AllPages() {
  return (
    <PageLayout>
      <Section title='heading'>
        <div className='w-1/2 h-3/4'>
          <Heading>All pages</Heading>
          <SubHeading>
            This page contains all pages that are in the site, including those
            which didn't be mentioned in any page.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#overview' />
          </SubHeading>
        </div>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
      </Section>
      <Section title='overview' bg='dark:bg-gray-800 bg-gray-50'>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
        <div className='w-1/2 h-3/4'>
          <Heading>All Pages</Heading>
          <SubHeading>
            Some anchor tags that links to sections that tells more about a
            page.
          </SubHeading>
          <div className='w-4/5 mt-5'>
            <Looper
              target='_parent'
              elements={[
                ["home", "#home"],
                ["actions", "#actions"],
                ["about", "#about"],
                ["uses", "#uses"],
                ["featured-posts", "#featured-posts"],
                ["opensource", "#opensource"],
              ]}
            />
          </div>
        </div>
      </Section>
      <Section title='about'>
        <div className='w-1/2 h-3/4'>
          <Heading>Just still learning</Heading>
          <SubHeading>
            I'm a learner at{" "}
            <a
              href='http://rca.ac.rw/'
              className='text-skin-base hover:underline'>
              Rwanda coding academy
            </a>{" "}
            and an opensource contributor at age of 16, i am currently learning
            web techs and working on some{" "}
            <a
              href='https://github.com/uwenayoallain'
              className='text-skin-base hover:underline'>
              open source projects.
            </a>
            <InnerLink
              href='/opensource'
              content='More about my open source projects'
            />
          </SubHeading>
        </div>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
      </Section>
      <Section title='featured-posts' bg='dark:bg-gray-800 bg-gray-50'>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
        <div className='w-1/2 h-3/4'>
          <Heading>Featured Posts</Heading>
          <SubHeading>
            Featured posts are blog posts with higher visibility and they are
            more important than regular posts.
            <InnerLink
              href='/featured-posts'
              content='More about featured posts'
            />
          </SubHeading>
        </div>
      </Section>
      <Section title='actions'>
        <div className='w-1/2 h-3/4'>
          <Heading>Action Tracker</Heading>
          <SubHeading>
            I'm just going to develop an action tracker for my open source
            projects just as a reminder and personal monitoring. check more
            about how the action tracker works here.
            <InnerLink
              href='/action-tracker'
              content='More about how i track my actions'
            />
          </SubHeading>
        </div>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
      </Section>
      <Section title='uses' bg='dark:bg-gray-800 bg-gray-50'>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
        <div className='w-1/2 h-3/4'>
          <Heading>Some stuffs that i use, maybe currently</Heading>
          <SubHeading>
            This is not something more but just a bunch of things that i use in
            my career.
            <InnerLink href='/action-tracker' content='More about what i use' />
          </SubHeading>
        </div>
      </Section>
      <Section title='open-source'>
        <div className='w-1/2 h-3/4'>
          <Heading>Open Source</Heading>
          <SubHeading>
            I am a developer, a blogger and an open source lover based in Rwanda
            <Badge>🇷🇼</Badge>. I've worked on some open source projects , take a
            look on them.
            <InnerLink
              href='/opensource'
              content='More about my open source projects'
            />
          </SubHeading>
        </div>
        <div className='w-1/2 h-full'>
          <ImageHolder src={Demo} />
        </div>
      </Section>
    </PageLayout>
  );
}
