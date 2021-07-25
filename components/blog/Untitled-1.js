import Image from 'next/image';
import RwandaImage from '../public/rwanda.jpg';
import { frontMatter as allPosts } from './**/*.mdx'
import Looper from '../components/simplifiers/Looper';
import Card from '../components/common/Card';
import Container from "../components/simplifiers/Container";
import getAllPosts from '../components/helpers/getAllPosts';
import PostLooper from '../components/blog/PostLooper';

export default function Home({ posts }) {
    const skills = [
        ["javascript", "/"],
        ["nodejs", "https://nodejs.org/en/"],
        ["fastify", "https://www.fastify.io/"],
        ["expressjs", "https://expressjs.com/"],
        ["vuejs", "https://v3.vuejs.org/"],
        ["quasar", 'https://quasar.dev/'],
        ["svelte", "https://svelte.dev/"],
        ["reactjs", "https://reactjs.org/"],
        ["nextjs", "https://nextjs.org/"],
        ["php", "/"],
        ["laravel", "https://laravel.com/"],
        ["mongodb", "https://www.mongodb.com/"],
        ["tailwindcss", "https://tailwindcss.com/"],
        ["postgresql", "/"],
        // ["redis"]
    ]

    const tools = [
        'vs-code',
        "postmanCanary",
        "chrome dev tools",
        "daily.dev chrome extension",
        "github",
        "vercel",
        "netlify",
        "gitlab",
    ]
    return (
        <Container>
            <div className="text-left">
                <p className='text'>
                    I am a developer, a blogger and an open source lover based in Rwanda <span className='badge'>🇷🇼</span>.
                    This is my digital home, where I write about the things I'm working on and share what I've learned.
                </p>
                <hr />
                <h3 className='text-3xl font-bold mb-1 mt-8 capitalize' id="about" >
                    about me:
                </h3>
                <h5 className='text-xl  font-bold mb-1 mt-8 capitalize'>
                    i mostly use:
                </h5>
                <Looper elements={skills} />
                <h5 className='text-xl font-bold mb-1 mt-8 capitalize'>
                    tools:
                </h5>
                <Looper elements={tools} />
                <h5 className='text-xl font-bold mb-1 mt-8 capitalize'>
                    dev news:
                </h5>
                <div className='quote'>
                    I highly recommend giving daily.dev a try. It’s an awesome coding news reader that delivers the top dev news in a way that’s simple and developer-friendly. Best of all, you can personalize it to get only the things you like.
                    <div className='quote-sign'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
                <Card otherstyles="w-1/2"
                    target="_blank"
                    href="https://api.daily.dev/get?r=Yarrison_allain"
                    cardtitle="Daily.dev"
                    icon={<svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" /><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" /></svg>} />
                <h5 className='text-xl font-bold mb-1 mt-8 capitalize'>
                    Featured Posts:
                </h5>
                <PostLooper posts={posts} size={3} className="text-center" />
                <h5 className='text-xl font-bold mb-1 mt-8 capitalize'>
                    living:
                </h5>
                <p className='text'>
                    i'm currently living in <span className='badger'>Rwanda,Africa</span>.
                </p>
                <div className="w-full">
                    <figure className='contents'>
                        <Image src={RwandaImage} draggable={false} alt="rwanda" width="600" height="300" className="rounded-[5.5%]" />
                        <figcaption>Image about <a badgerert="_blanck" href="https://www.google.com/search?q=rwanda&btnK=Google+Search&hl=en&sxsrf=ALeKk03aRMoNbcs8iE-1iyJFNUfM2NLTQA%3A1623401153879&source=hp&ei=wSLDYNWGM9DBgQa22aS4AQ&iflsig=AINFCbYAAAAAYMMw0arQB7ywhRKV0jco7Q3fzVUb4tsI&oq=Not+Yarison&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgQIIxAnOgUIABCRAjoICC4QsQMQgwE6BQgAELEDOg4ILhCxAxDHARCvARCLAzoUCC4QsQMQxwEQrwEQiwMQpgMQqAM6CwgAELEDEIMBEIsDOggILhCxAxCRAjoHCAAQhwIQFDoFCC4QiwM6AggAOgIILjoGCAAQFhAeOggIABAWEAoQHjoECAAQCjoECAAQDToGCAAQDRAeUPIGWMYvYJczaAFwAHgAgAGSBIgB3yGSAQkyLTIuOC4xLjGYAQCgAQGqAQdnd3Mtd2l6uAEC&sclient=gws-wiz&ved=0ahUKEwiV6-jImI_xAhXQYMAKHbYsCRcQ4dUDCAc&uact=5"
                            className="text-skin-base hover:underline" >
                            rwanda </a>
                            from <a target="_blank" href="https://unsplash.com" className="text-skin-base hover:underline">unsplash</a></figcaption>
                    </figure>
                </div>
            </div>
        </Container>
    );
}


export async function getStaticProps() {
    return getAllPosts(allPosts)
}