import Link from 'next/link'
import Header from '@/components/blog/Header'
import Container from '@/components/simplifiers/Container';
import { useCountPageView } from '@/hooks/useCountpageviews';
import Author from "@/components/blog/Author";

export default function PostLayout({ children, frontMatter }) {
    const { title, slug, readingTime, by, date } = frontMatter;
    const views = useCountPageView(slug);
    return (
        <Container>
            <div className="my-5">
                <Header />
            </div>
            <main className="prose-xl prose text-left markdown">
                <div>
                    <h1 className="capitalize">
                        {title}
                    </h1>
                    <Author by={by} readingTime={readingTime} views={views} date={date} />
                </div>
                {children}
            </main>
            <Link href="/">
                <a className="static">
                    Back
                </a>
            </Link>
        </Container>
    )
}