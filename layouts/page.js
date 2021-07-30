import Link from 'next/link'
import Header from '@/components/blog/Header'
import Container from '@/components/simplifiers/Container';
import Image from "next/image"
import Myimage from '@/public/images/my-image.jpg';
import Heading from '@/components/blog/Heading';
import SocialCard from '@/components/blog/SocialCard';

export default function PageLayout({ children }) {
    return (
        <Container>
            <main className="prose-xl !text-gray-800 dark:!text-gray-200 prose text-left">
                <div className='text-center my-3'>
                    <div className='w-36 rounded-full shadow h-36 m-auto'>
                        <Image className='rounded-full' src={Myimage} width="300" height="300" draggable="false" />
                    </div>
                    <Heading>I'm uwenayoallain</Heading>
                    <SocialCard />
                    <hr />
                </div>
                {children}
            </main>
        </Container>
    )
}