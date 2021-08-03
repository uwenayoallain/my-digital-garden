import PageLayout from '@/layouts/page'
import Blockquote from "@/components/blog/Quote";
import Looper from "@/components/simplifiers/Looper";
import Badge from "@/components/blog/Badge";
import OuterLink from '@/components/common/OuterLink';
import Section from '@/components/blog/Section';
import Myimage from "@/public/images/my-image.jpg";
import Heading from '@/components/blog/Heading';
import SocialCard from '@/components/blog/SocialCard';
import SubHeading from '@/components/blog/SubHeading';
import ArrowLink from '@/components/common/ArrowLink';
import InnerLink, { ButtonLinks } from "@/components/common/innerLink";
import Image from 'next/image';
import Demo from "@/public/images/demo.png";

const Index = () => {

  return (
    <PageLayout>
      <div>
        <Section title="heading">
          <div className="w-1/2 h-3/4">
            <Heading>I'm uwenayoallain</Heading>
            <SubHeading>
              I am a developer, a blogger and an open source lover based
              in Rwanda<Badge>🇷🇼</Badge>. This is my digital garden, where
              I write about the things I'm working on and share what
              I've learned.
              <ButtonLinks firsthref="/about" firstbutton="About me" />
            </SubHeading>
          </div>
          <div className="w-1/2 h-full">
            <div className='w-36 rounded-full shadow h-36 m-auto'>
              <Image className='rounded-full' src={Myimage} width="300" height="300" draggable="false" />
            </div>
            <SocialCard />
          </div>
          <ArrowLink direction="bottom" to="#about" />
          <hr />
        </Section>
        <Section title="about" bg="dark:bg-gray-800 bg-gray-50">
          <div className="w-1/2 h-full">
            <div className="">
              <Image src={Demo} />
            </div>
          </div>
          <div className="w-1/2 h-3/4">
            <Heading>Uwenayoallain(Yarison allain)</Heading>
            <SubHeading>
              Hi there, I'm a junior developer and a learner at <a href="http://rca.ac.rw/" className="text-skin-base hover:underline">Rwanda coding academy</a>, i am currently learning web techs and working on some <a href="https://github.com/uwenayoallain" className="text-skin-base hover:underline">open source projects.</a>
              <InnerLink href="/about" content="More about me" />
            </SubHeading>
          </div>
        </Section>
        {/* <h3>Programming Languages i mostly use:</h3>

        <Looper elements={[
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
        ]} />

        <h4>Tools i use:</h4>

        <Looper elements={["vs-code", "postmanCanary", "chrome dev tools", "daily.dev chrome extension", "github", "vercel", "netlify", "gitlab",]} /> */}
        {/* <h3>Dev news:</h3>
  
          <Blockquote
            content='I highly recommend giving daily.dev a try. It’s an awesome coding news reader that delivers the top dev news in a way that’s simple and developer-friendly. Best of all, you can personalize it to get only the things you like.'
            icon={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'>
                <path d='M9 2a1 1 0 000 2h2a1 1 0 100-2H9z' />
                <path
                  fillRule='evenodd'
                  d='M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                  clipRule='evenodd'
                />
              </svg>
            }
          />
  
          <OuterLink
            target='_blank'
            href='https://api.daily.dev/get?r=Yarrison_allain'
            title='Daily.dev'
          /> */}
        <Section title="blog">
          <div className="w-1/2 h-3/4">
            <Heading>My personal blog:</Heading>
            <SubHeading>
              i like sharing some stuffs that i've gained with others , i use some blogging sites to  gain more traffic  to make sure that i'm being more helpful. <i>[at least before] </i> <a href="http://dev.to" className="text-skin-base hover:underline">Dev.to</a> is my favorite, check out my blog!
              <InnerLink href="/blog" content="More about my blog" />
            </SubHeading>
          </div>
          <div className="w-1/2 h-full">
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}
export default Index;
