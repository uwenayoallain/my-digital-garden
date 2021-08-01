import Link from 'next/link'

export default function InnerLink({ href, content = "Learn more", ...otherProps }) {
  return (
    <Link href={href}>
      <a className="group mt-16 m-6 block w-max rounded-full p-6 pr-12 border-2 font-medium dark:text-black text-gray-100 dark:bg-white hover:ring-4 hover:ring-yellow-400 hover:text-yellow-400 dark:hover:text-indigo-500 dark:hover:ring-indigo-500 bg-black border-black dark:border-white" {...otherProps}>
        {content}
        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block group-focus:animate-bounce group-hover:translate-x-9  w-6 h-6 rotate-0 translate-x-3 transition" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </Link>
  )
}

export const ButtonLinks = ({ firsthref = "/home", lasthref = "/blog", firstbutton = "home", lastbutton = "blog", ...otherProps }) => {
  return (
    <Link href={firsthref}>
      <a className="group mt-16 my-3 mx-6 block w-max rounded-full p-6 pr-12 border-2 font-medium dark:text-black text-gray-100 dark:bg-white hover:ring-4 hover:ring-yellow-400 hover:text-yellow-400 dark:hover:text-indigo-500 dark:hover:ring-indigo-500 bg-black border-black dark:border-white" {...otherProps}>
        {firstbutton}
      </a>
    </Link>
  )
}