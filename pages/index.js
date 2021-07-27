import PageLayout from '@/layouts/page'
import Blockquote from "@/components/blog/Quote";
import Looper from "@/components/simplifiers/Looper";
import Text from "@/components/blog/Text";
import Badge from "@/components/blog/Badge";
import Card from '@/components/common/Card';
import Fetcher from '@/lib/fetcher';
import marked from "marked";

const Index = ({ description }) => {

  const content = marked(description);
  return (
    <PageLayout>

      <Text>
        I am a developer, a blogger and an open source lover based
        in Rwanda<Badge>🇷🇼</Badge>. This is my digital home, where
        I write about the things I'm working on and share what
        I've learned.
      </Text>
      <hr />
      <h2> About Me:</h2>
      <Blockquote otherstyles="text-left bg-skin-base/50" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Blockquote>

      <p className='text-left capitalize'>from my <a target="_blank" href="https://github.com/uwenayoallain" className='text-skin-base hover:underline'>github profile</a></p>

      <Text>More info about me.</Text>

      <h4>Programming Languages i mostly use:</h4>

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

      <Looper elements={["vs-code", "postmanCanary", "chrome dev tools", "daily.dev chrome extension", "github", "vercel", "netlify", "gitlab",]} />
      <h3>Dev news:</h3>

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

      <Card
        otherstyles='w-1/2 !no-underline'
        target='_blank'
        href='https://api.daily.dev/get?r=Yarrison_allain'
        cardtitle='Daily.dev'
        icon={
          <svg
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path
              fillRule='evenodd'
              d='M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z'
            />
            <path
              fillRule='evenodd'
              d='M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z'
            />
          </svg>
        }
      />
      <h2> Featured Posts:</h2>
    </PageLayout>
  )
}
export default Index;

export async function getStaticProps() {

  // const description = await Fetcher("https://raw.githubusercontent.com/uwenayoallain/uwenayoallain/main/README.md", "text")
  const description = `### this is cool`

  return {
    props: {
      description,
    },
  }
}