import Link from 'next/link'

export default function InnerLink({ href, content = "Learn more", className, ...otherProps }) {
  return (
    <Link href={href}>
      <a className={` ${className} group mt-16 m-6 block w-max rounded-full p-6 pr-12 border-4 font-medium dark:text-black text-gray-100 dark:bg-white hover:ring-4 hover:ring-yellow-400 ring-0 transition  hover:text-yellow-400 dark:hover:text-indigo-500 dark:hover:ring-indigo-500 bg-gray-900 border-transparent bg-clip-padding`} {...otherProps}>
        {content}
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block group-focus:animate-bounce group-hover:translate-x-9  w-6 h-6 rotate-0 translate-x-3 transition" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </Link>
  )
}

export const ButtonLinks = ({ firsthref = "/home", lasthref = "/blog", firstbutton = "Home", lastbutton = "Blog", ...otherProps }) => {
  return (
    <div>
      <Link href={firsthref}>
        <a className="group mt-12 m-4  inline-block w-max rounded-full py-4 px-12 border-4 border-transparent font-medium dark:text-black transition ring-0 text-gray-100 dark:bg-white hover:ring-4 hover:ring-gray-900 dark:hover:ring-white bg-gray-900 bg-clip-padding" {...otherProps}>
          {firstbutton}
        </a>
      </Link>
      <Link href={lasthref}>
        <a className="group mt-12 m-4 w-max inline-block rounded-full py-4 px-12 border-4 border-gray-900 dark:border-gray-700 dark:hover:border-gray-500 font-medium dark:text-white text-gray-900 transition ring-0 hover:ring-4 hover:ring-gray-900 dark:hover:ring-white bg-white dark:bg-gray-900" {...otherProps}>
          {lastbutton}
        </a>
      </Link>
    </div>
  )
}