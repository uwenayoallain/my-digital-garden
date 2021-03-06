import PageLayout from "@/layouts/page";
import Looper from "@/components/simplifiers/Looper";
import Badge from "@/components/blog/Badge";
import OuterLink from "@/components/common/OuterLink";
import Section, { Handler } from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import ArrowLink from "@/components/common/ArrowLink";
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import Demo from "@/public/images/demo.png";
import ImageHolder from "@/components/common/ImageHolder";

const About = () => {
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
              <ButtonLinks />
              <ArrowLink direction='bottom' to='#about' />
            </SubHeading>
          </Handler>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
        </Section>
        <Section title='about' bg='dark:bg-gray-800 bg-gray-50' reverse>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
          <Handler>
            <Heading>Just still learning</Heading>
            <SubHeading>
              I&apos;m a learner at{" "}
              <a
                href='http://rca.ac.rw/'
                className='text-skin-base hover:underline'>
                Rwanda coding academy
              </a>{" "}
              and an opensource contributor at age of 16, i am currently
              learning web techs and working on some{" "}
              <a
                href='https://github.com/uwenayoallain'
                className='text-skin-base hover:underline'>
                open source projects.
              </a>
              <InnerLink href='/opensource' content='open source' />
            </SubHeading>
          </Handler>
        </Section>
        <Section title='actions'>
          <Handler>
            <Heading>Action Tracker</Heading>
            <SubHeading>
              I&apos;m just going to develop an action tracker for my open
              source projects just as a reminder and personal monitoring. check
              more about how the action tracker works here.
              <InnerLink
                href='/opensource/action-tracker'
                content='action tracker'
              />
            </SubHeading>
          </Handler>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
        </Section>
        <Section
          title='programming'
          bg='dark:bg-gray-800 bg-gray-50 h-auto'
          reverse>
          <Handler height=''>
            <ImageHolder src={Demo} />
          </Handler>
          <Handler>
            <Heading>Tools i mostly use</Heading>
            <Looper
              elements={[
                ["javascript", "/"],
                ["nodejs", "https://nodejs.org/en/"],
                ["fastify", "https://www.fastify.io/"],
                ["expressjs", "https://expressjs.com/"],
                ["vuejs", "https://v3.vuejs.org/"],
                ["quasar", "https://quasar.dev/"],
                ["svelte", "https://svelte.dev/"],
                ["reactjs", "https://reactjs.org/"],
                ["nextjs", "https://nextjs.org/"],
                ["php", "/"],
                ["laravel", "https://laravel.com/"],
                ["mongodb", "https://www.mongodb.com/"],
                ["tailwindcss", "https://tailwindcss.com/"],
                ["postgresql", "/"],
                ["vs-code", "#"],
                ["postman Canary", "#"],
                ["daily.dev", "#"],
                ["github", "#"],
                ["vercel", "#"],
                ["netlify", "#"],
                ["gitlab", "#"],
              ]}
            />
            <SubHeading>
              <InnerLink href='/uses' content='More about tools i use' />
            </SubHeading>
          </Handler>
        </Section>
        <Section title='daily.dev'>
          <Handler>
            <Heading>Dev news</Heading>
            <SubHeading>
              I highly recommend giving daily.dev a try. It’s an awesome coding
              news reader that delivers the top dev news in a way that’s simple
              and developer-friendly. Best of all, you can personalize it to get
              only the things you like.
              <OuterLink
                target='_blank'
                href='https://api.daily.dev/get?r=Yarrison_allain'
                title='Daily.dev'
              />
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
export default About;
