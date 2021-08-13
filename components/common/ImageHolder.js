import Image from "next/image";

export default function ImageHolder({
  src,
  alt = "Demo image of uwenayoallain",
  ...props
}) {
  return (
    <div className='w-8/12 m-auto md:w-1/2' {...props}>
      <Image src={src} alt={alt} />
    </div>
  );
}
