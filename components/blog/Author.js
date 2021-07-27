import image from "@/public/images/my-image.jpg"
import Image from "next/image";
import Text from "./Text";

export default function Author({ by, readingTime, views, date }) {
    return (
        <div className="grid grid-cols-7 p-1 text-base">
            <Image src={image} draggable="false" className="rounded-full" />
            <div className="col-span-3 pt-5">
                <Text>{by}/{date}</Text>
            </div>
            <div className="col-span-3 pt-5">
                <Text>{views} views &#8226; {readingTime.text} &#8226; {readingTime.words} words</Text>
            </div>
        </div>
    )
}
