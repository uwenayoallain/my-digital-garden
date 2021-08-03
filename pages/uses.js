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

const About = () => {

    return (
        <PageLayout>
            <div>
                <Section title="heading">
                    <div className="w-1/2 h-3/4">
                        <Heading>some stuffs that i use, maybe currently</Heading>
                        <SubHeading>
                            This is not something more but just a bunch of things that i use in my career.
                            <ButtonLinks />
                            <ArrowLink direction="bottom" to="#programming" />
                        </SubHeading>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-1/2 m-auto">
                            <Image src={Demo} />
                        </div>
                    </div>
                </Section>
                <Section title="programming" bg="dark:bg-gray-800 bg-gray-50 h-auto">
                    <div className="w-1/2 h-full">
                        <div className="w-1/2 m-auto">
                            <Image src={Demo} />
                        </div>
                    </div>
                    <div className="w-1/2 h-3/4" >
                        <Heading>Tools i mostly use[programming languages]</Heading>
                        <SubHeading>
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
                        </SubHeading>
                    </div>
                </Section>
                <Section title="tools">
                    <div className="w-1/2 h-3/4" >
                        <Heading>Services || tools i mostly use</Heading>
                        <SubHeading>
                            <Looper elements={[
                                "vs-code",
                                "postmanCanary",
                                "daily.dev",
                                "github",
                                "vercel",
                                "netlify",
                                "gitlab",
                                "bitbucket",
                                "docker",
                                ""
                            ]} />
                        </SubHeading>
                    </div>
                    <div className="w-1/2 h-full">
                        <div className="w-1/2 m-auto">
                            <Image src={Demo} />
                        </div>
                    </div>
                </Section>
            </div>
        </PageLayout>
    )
}
export default About;
