import { usePageViews } from '@/hooks/useCountpageviews';
import InnerLink from '../common/innerLink';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function Post({
  title,
  path,
  excerpt,
  by,
  date,
  readingTime,
  words,
}) {
  const [copied, setCopied] = useState(false);
  const views = usePageViews(path);
  return (
    <>
      <div className="relative z-0 block transition bg-gray-100 border-4 border-white dark:border-gray-900 ring-0 hover:ring-4 ring-skin-base dark:bg-gray-800 rounded-xl group">
        <CopyToClipboard
          text={process.env.NEXT_PUBLIC_VERCEL_URL + path}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          {copied ? (
            <button className="absolute z-40 p-2 text-gray-900 bg-white rounded w-max h-max right-2 top-2 group-hover:block">
              <span className="text-skin-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </span>
            </button>
          ) : (
            <button className="absolute z-40 hidden p-2 text-gray-900 bg-white rounded dark:bg-gray-400 w-max h-max right-2 top-2 group-hover:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          )}
        </CopyToClipboard>
        <a
          className="inset-0 z-0 block h-full p-3 py-20 mx-2 my-4 transition"
          href={'/' + path}
        >
          <div className="w-40 h-40 m-auto bg-gray-900 rounded-full dark:bg-white"></div>
          <div className="block p-3 mx-2 my-4 leading-8 rounded cursor-pointer">
            <h3 className="mt-8 mb-1 text-3xl font-bold capitalize">{title}</h3>
            <p className="capitalize">{excerpt}</p>
            <div className="text-base text-opacity-70">
              {date} by{' '}
              <span className="text-skin-base hover:underline">{by}</span>
            </div>
            <div>
              <span>{readingTime} </span>&#8226;
              <span className="text-skin-base"> {words} </span>words
              {views > 0 ? (
                <>
                  {' '}
                  &#8226; <span className="text-skin-base">
                    {' '}
                    {views} views
                  </span>{' '}
                </>
              ) : (
                ''
              )}
            </div>
          </div>
        </a>
        <InnerLink
          href={'/' + path}
          content="Read More"
          className="absolute bottom-0 !w-10/12 lg:!w-max lg:left-8"
        />
      </div>
    </>
  );
}
