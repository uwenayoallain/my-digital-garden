import Container from '../components/simplifiers/Container';
import Image from "next/image"
import Myimage from '../public/my-image.jpg';
import Heading from '../components/blog/Heading';
import SocialCard from '../components/blog/SocialCard';

export default function PageLayout({ children, frontMatter }) {
    const { title } = frontMatter;
    return (
        <Container>
            <main className="prose-xl prose text-left markdown">
                <div className='text-center my-3'>
                    <div className='w-36 rounded-full shadow h-36 m-auto'>
                        <Image className='rounded-full' src={Myimage} width="300" height="300" draggable="false" />
                    </div>
                    <Heading>{title}</Heading>
                    <SocialCard />
                    <hr />
                </div>
                {children}
            </main>
        </Container>
    )
}