import { usePageViews } from '@/hooks/useCountpageviews'
import InnerLink from '../common/innerLink'

export default function Post({ title, path, excerpt, by, date, readingTime, words }) {

  const views = usePageViews(path)
  return (
    <a className="relative block h-full p-3 py-20 mx-2 my-4 transition bg-gray-100 border-2 border-white dark:border-gray-900 dark:ring-gray-100 ring-0 hover:ring-4 ring-gray-800 dark:bg-gray-800 rounded-xl" href={path}>
      <div className="w-40 h-40 m-auto bg-gray-900 rounded-full dark:bg-white">
      </div>
      <div className='block p-3 mx-2 my-4 leading-8 rounded cursor-pointer'>
        <h3 className='mt-8 mb-1 text-3xl font-bold capitalize'>{title}</h3>
        <p className="capitalize">{excerpt}</p>
        <div className='text-base text-opacity-70'>{date} by <span className="text-skin-base hover:underline">{by}</span></div>
        <div><span>{readingTime} </span>&#8226;<span className="text-skin-base"> {words} </span>words
          {views > 0 ? <> &#8226; <span className="text-skin-base"> {views} views</span> </> : ""}
        </div>
        <InnerLink href={path} content="Read More" className="absolute bottom-0 px-4 py-3" />
      </div>
    </a>
  )
}
