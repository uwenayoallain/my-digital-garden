import PageLayout from "@/layouts/page";
import Blockquote from "@/components/blog/Quote";
import Looper from "@/components/simplifiers/Looper";
import Badge from "@/components/blog/Badge";
import OuterLink from "@/components/common/OuterLink";
import Section, { Handler } from "@/components/blog/Section";
import Myimage from "@/public/images/my-image.jpg";
import Heading from "@/components/blog/Heading";
import SocialCard from "@/components/blog/SocialCard";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import Image from "next/image";
import Demo from "@/public/images/demo.png";
import ImageHolder from "@/components/common/ImageHolder";

const Index = () => {
  return (
    <PageLayout>
      <div>
        <Section title='heading'>
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
            <div className='m-auto rounded-full shadow w-36 h-36'>
              <Image
                className='rounded-full'
                src={Myimage}
                width='300'
                height='300'
                alt='My Image'
                draggable='false'
              />
            </div>
            <SocialCard />
          </Handler>
          <ArrowLink direction='bottom' to='#about' />
          <hr />
        </Section>
        <Section title='about' bg='dark:bg-gray-800 bg-gray-50'>
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
        <Section title='blog'>
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
