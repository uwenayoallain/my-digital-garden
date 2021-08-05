import Link from 'next/link'
import Header from '@/components/blog/Header'
import Container from '@/components/simplifiers/Container';
import { useCountPageView } from '@/hooks/useCountpageviews';
import Author from "@/components/blog/Author";
import InnerLink from '@/components/common/innerLink';
import Text from '@/components/blog/Text';

export default function PostLayout({ children, frontMatter }) {
    const { title, slug, readingTime, by, date } = frontMatter;
    const views = useCountPageView(slug);
    return (
        <Container>
            <div className=" w-3/4 m-auto relative">
                <InnerLink content={"Back to overview"} href={'/blog'} left />
                <main className="prose prose-2xl markdown !text-gray-900 dark:!text-white">
                    <h1>
                        {title}
                    </h1>
                    <Text className="capitalize">{date} &#8226;{views} views &#8226; {readingTime.text} &#8226; {readingTime.words} words </Text>
                    {children}
                </main>
                <hr />
                <Author by={by} />
            </div>
        </Container>
    )
}