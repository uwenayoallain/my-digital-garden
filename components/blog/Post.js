import { motion } from 'framer-motion'
import { usePageViews } from '@/hooks/useCountpageviews'
import Link from 'next/link'

export default function Post({ title, slug, excerpt, by, date, readingTime, words }) {
  const variants = {
    final: {
      scale: 1.05, rotate: [0, -1, 1, 0], transition: {
        duration: 0.3,
      }
    },
    tap: {
      scale: 0.95
    },
  }
  const path = `blog/${slug}`;
  const views = usePageViews(path)
  return (
    <motion.div variants={variants} whileHover="final" whileTap="tap">
      <div className='hover:shadow-lg group border hover:border-skin-base hover:bg-skin-base rounded my-4 mx-2 p-3 leading-8 block cursor-pointer'>
        <h3 className='text-3xl font-bold mb-1 mt-8 capitalize group-hover:text-skin-base'>{title}</h3>
        <p>{excerpt}</p>
        <div className='text-opacity-70 text-base'>Posted on {date} by <span className="text-skin-base hover:underline">{by}</span></div>
        <div><span className="">{readingTime} </span>&#8226;<span className="text-skin-base"> {words} </span>words
          {views > 0 ? <> &#8226; <span className="text-skin-base"> {views} views</span> </> : ""}
        </div>
        <Link href={path}>
          <a className='static'>Read More</a>
        </Link>
      </div>
    </motion.div >
  )
}
