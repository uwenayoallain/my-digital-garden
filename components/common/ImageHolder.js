import Image from "next/image";

export default function ImageHolder({
  src,
  alt = "Demo image of uwenayoallain",
  ...props
}) {
  return (
    <div className='w-1/2 m-auto' {...props}>
      <Image src={src} alt={alt} />
    </div>
  );
}
