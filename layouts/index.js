import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/blog/Header'
import Container from '../components/simplifiers/Container';
import { useCountPageView } from '../hooks/useCountpageviews';

export default function PostLayout({ children, frontMatter }) {
    const { title, path } = frontMatter;
    const views = useCountPageView(path);
    return (
        <Container>
            <div className="my-5">
                <Header />
            </div>
            <Head>
                <title>{title}</title>
            </Head>
            <main className="prose-xl prose text-left markdown">
                <div>
                    <h1 className="capitalize">
                        {title}
                    </h1>
                    <p>{views} views</p>
                </div>
                {children}
            </main>
            <Link href="/blog">
                <a className="static">
                    Back
                </a>
            </Link>
        </Container>
    )
}