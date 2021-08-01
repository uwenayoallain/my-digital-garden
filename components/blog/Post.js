import { usePageViews } from '@/hooks/useCountpageviews'
import Link from 'next/link'
import InnerLink from '../common/innerLink'

export default function Post({ title, path, excerpt, by, date, readingTime, words }) {

  const views = usePageViews(path)
  return (
    <div className="relative h-full py-20 my-4 mx-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
      <div className="w-40 h-40 rounded-full bg-gray-900 dark:bg-white m-auto">
      </div>
      <div className='rounded my-4 mx-2 p-3 leading-8 block cursor-pointer'>
        <h3 className='text-3xl font-bold mb-1 mt-8 capitalize'>{title}</h3>
        <p className="capitalize">{excerpt}</p>
        <div className='text-opacity-70 text-base'>{date} by <span className="text-skin-base hover:underline">{by}</span></div>
        <div><span>{readingTime} </span>&#8226;<span className="text-skin-base"> {words} </span>words
          {views > 0 ? <> &#8226; <span className="text-skin-base"> {views} views</span> </> : ""}
        </div>
        <InnerLink href={path} content="Read More" className="absolute bottom-0 px-4 py-3" />
      </div>
    </div >
  )
}
