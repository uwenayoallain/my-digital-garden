import Link from 'next/link'
import Header from '@/components/blog/Header'
import Container from '@/components/simplifiers/Container';
import { useCountPageView } from '@/hooks/useCountpageviews';
import Text from '@/components/blog/Text';
import Badge from '@/components/blog/Badge';

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
                    <Text>{views} views &#8226; {readingTime.text} &#8226; {readingTime.words} words</Text>
                    <Badge>{by}</Badge>
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