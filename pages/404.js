import Section from "@/components/blog/Section";
import Heading from "@/components/blog/Heading";
import SubHeading from "@/components/blog/SubHeading";
import { useRouter } from "next/router";
import ArrowLink from "@/components/common/ArrowLink";
import InnerLink from "@/components/common/innerLink";

export default function Custom404() {
    const path = useRouter();
    return (
        <>
            <Section>
                <div className="w-1/2 h-3/4">
                    <Heading>
                        <span className=''>4<span className='text-skin-base'>0</span>4</span><span>| Page Not Found</span>
                    </Heading>
                    <SubHeading>
                        It looks like <span className="text-skin-base"> {path.asPath} </span> , the page you are looking for is not found on this domain.
                        but don't worry we've got more.
                        <InnerLink href="/about" content="Blog" />
                        <ArrowLink direction="bottom" to="#more" />
                    </SubHeading>
                </div>
                <div className='w-1/2 h-full'>

                </div>
            </Section>

        </>
    );
}