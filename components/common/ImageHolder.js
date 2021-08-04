import Image from "next/image";

export default function ImageHolder({ src, ...props }) {
    return (
        <div className="w-1/2 m-auto" {...props}>
            <Image src={src} />
        </div>
    )
}
