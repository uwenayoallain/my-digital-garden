import Section, { Handler } from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import { ButtonLinks } from "@/components/common/innerLink";
import InnerLink from "@/components/common/innerLink";
import ImageHolder from "@/components/common/ImageHolder";
import Demo from "@/public/images/demo.png";

export default function Actions() {
  return (
    <>
      <Section>
        <Handler>
          <Heading>
            <span className=''>
              T<span className='text-skin-base'>0D</span>o
            </span>
          </Heading>
          <SubHeading>
            It looks like the page you are looking for is still in development
            mode. but dont worry we&apos;ve got more you can look at.
            <ButtonLinks />
            <ArrowLink direction='bottom' to='#more' />
          </SubHeading>
        </Handler>
        <Handler height=''>
          <ImageHolder src={Demo} />
        </Handler>
      </Section>
      <Section title='about' bg='dark:bg-gray-800 bg-gray-50'>
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
