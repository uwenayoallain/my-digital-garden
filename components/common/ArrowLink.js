import Link from "next/link";
export default function ArrowLink({ direction = "right", to = "#" }) {
    return (
        <Link href={to}>
            <a className="group block rounded-full p-3 absolute bottom-40 right-3 border-2 border-black dark:border-white">
                {
                    direction === "bottom" &&
                    <svg xmlns="http://www.w3.org/2000/svg" className="group-focus:animate-bounce group-hover:translate-y-8 bg-white dark:bg-gray-900 w-6 h-6 rotate-90 translate-y-4 transition" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                }
            </a>
        </Link>
    )
}
