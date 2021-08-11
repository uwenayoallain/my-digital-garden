import image from "@/public/images/demo.png";
import ImageHolder from "../common/ImageHolder";
import InnerLink from "../common/innerLink";
import Badge from "./Badge";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

export default function Author({ by = "uwenayoallain", ...props }) {
  return (
    <div className='flex flex-wrap mt-10 rounded-md ' {...props}>
      <div className='w-1/3'>
        <ImageHolder src={image} />
      </div>
      <div className='w-2/3'>
        <Heading className=''>{by}</Heading>
        <SubHeading>
          I am a developer, a blogger and an open source lover based in Rwanda
          <Badge>🇷🇼</Badge>. This is my digital garden, where I write about the
          things I&apos;m working on and share what I&apos;ve learned.
          <InnerLink href='/about' content='More about the author' />
        </SubHeading>
      </div>
    </div>
  );
}
