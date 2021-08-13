import Link from "next/link";

export default function InnerLink({
  href,
  content = "Learn more",
  className,
  left = false,
  ...otherProps
}) {
  return (
    <Link href={href}>
      {left ? (
        <a
          className={` ${className} group m-4 block w-max rounded-full p-2 pl-10 border-4 font-medium  bg-transparent transition hover:text-skin-base dark:hover:text-skin-base border-transparent bg-clip-padding`}
          {...otherProps}>
          {
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='inline-block w-6 h-6 transition rotate-180 -translate-x-3 group-focus:animate-bounce group-hover:-translate-x-9'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          }
          {content}
        </a>
      ) : (
        <a
          className={` ${className} group md:mt-16 m-6 block w-11/12 md:w-max rounded-full p-6 text-center md:pr-12 border-4 font-medium dark:text-black text-gray-100 dark:bg-white hover:ring-4 ring-0 transition hover:text-skin-base dark:hover:text-skin-base ring-skin-base bg-gray-900 border-transparent bg-clip-padding`}
          {...otherProps}>
          {content}
          {
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='inline-block w-6 h-6 transition rotate-0 translate-x-3 group-focus:animate-bounce group-hover:translate-x-9'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          }
        </a>
      )}
    </Link>
  );
}

export const ButtonLinks = ({
  firsthref = "/home",
  lasthref = "/blog",
  firstbutton = "Home",
  lastbutton = "Blog",
  ...otherProps
}) => {
  return (
    <div>
      <Link href={firsthref}>
        <a
          className='inline-block w-9/12 py-4 mx-6 my-3 font-medium text-center text-gray-100 transition bg-gray-900 border-4 border-transparent rounded-full md:px-12 md:m-4 md:mt-12 group md:w-max dark:text-black ring-0 dark:bg-white hover:ring-4 hover:ring-gray-900 dark:hover:ring-white bg-clip-padding'
          {...otherProps}>
          {firstbutton}
        </a>
      </Link>
      <Link href={lasthref}>
        <a
          className='inline-block w-9/12 py-4 mx-6 my-3 font-medium text-center text-gray-900 transition bg-white border-4 border-gray-900 rounded-full md:px-12 md:m-4 md:mt-12 hover:border-transparent group md:w-max dark:border-gray-700 dark:hover:border-gray-900 dark:text-white ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-white dark:bg-gray-900'
          {...otherProps}>
          {lastbutton}
        </a>
      </Link>
    </div>
  );
};
