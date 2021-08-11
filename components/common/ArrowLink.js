import Link from "next/link";
export default function ArrowLink({ direction = "right", to = "#" }) {
  return (
    <Link href={to}>
      <a className='absolute block p-3 transition border-2 border-black rounded-full group bottom-40 right-3 dark:border-white'>
        {direction === "bottom" && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 transition rotate-90 translate-y-4 bg-white group-focus:animate-bounce group-hover:translate-y-8 dark:bg-gray-900'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={3}
              d='M14 5l7 7m0 0l-7 7m7-7H3'
            />
          </svg>
        )}
      </a>
    </Link>
  );
}
