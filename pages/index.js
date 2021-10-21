import PageLayout from "@/layouts/page";
import Badge from "@/components/blog/Badge";
import Section, { Handler } from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SocialCard from "@/components/blog/SocialCard";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import Demo from "@/public/images/demo.png";
import ImageHolder from "@/components/common/ImageHolder";

const Index = () => {
  return (
    <PageLayout>
      <div>
        <Section
          title='heading'
          parentStyles='bg-gradient-to-br from-purple-800 dark:from-blue-500 dark:via-transparent via-transparent'
          bg='bg-white dark:bg-gray-900'>
          <Handler>
            <Heading>I&apos;m uwenayoallain</Heading>
            <SubHeading>
              I am a developer, a blogger and an open source lover based in
              Rwanda<Badge>🇷🇼</Badge>. This is my digital garden, where I write
              about the things I&apos;m working on and share what I&apos;ve
              learned.
              <ButtonLinks firsthref='/about' firstbutton='About me' />
            </SubHeading>
          </Handler>
          <Handler height=''>
            <ImageHolder src={Demo} />
            <SocialCard />
          </Handler>
          <ArrowLink direction='bottom' to='#about' />
        </Section>
        <Section
          title='about'
          bg='dark:bg-gray-800 bg-gray-50'
          parentStyles='bg-gradient-to-tl from-purple-800 dark:from-blue-500 dark:via-transparent via-transparent'
          reverse>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
          <Handler>
            <Heading>Uwenayoallain(Yarison allain)</Heading>
            <SubHeading>
              Hi there, I&apos;m a junior developer and a learner at{" "}
              <a
                href='http://rca.ac.rw/'
                className='text-skin-base hover:underline'>
                Rwanda coding academy
              </a>
              , i am currently learning web techs and working on some{" "}
              <a
                href='https://github.com/uwenayoallain'
                className='text-skin-base hover:underline'>
                open source projects.
              </a>
              <InnerLink href='/about' content='More about me' />
            </SubHeading>
          </Handler>
        </Section>
        <Section
          title='blog'
          bg='bg-white dark:bg-gray-900'
          parentStyles='bg-gradient-to-bl from-purple-800 dark:from-blue-500 dark:via-transparent via-transparent'>
          <Handler>
            <Heading>My personal blog:</Heading>
            <SubHeading>
              i like sharing some stuffs that i&apos;ve gained with others , i
              use some blogging sites to gain more traffic to make sure that
              i&apos;m being more helpful. <i>[at least before] </i>{" "}
              <a
                href='http://dev.to'
                className='text-skin-base hover:underline'>
                Dev.to
              </a>{" "}
              is my favorite, check out my blog!
              <InnerLink href='/blog' content='More about my blog' />
            </SubHeading>
          </Handler>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
        </Section>
      </div>
    </PageLayout>
  );
};
export default Index;
