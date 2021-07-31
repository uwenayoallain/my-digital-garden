import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-screen leading-10 font-medium capitalize relative">
            <div className="grid grid-cols-4 pt-[10%] p-6 w-11/12 mx-auto">
                <div className="text-lg">
                    <Link href={'/'}>
                        <a className="cursor-pointer">
                            <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                                <rect width="35" height="15" fill="#000" x="20" y='10' />
                                <rect width="20" height="20" rx="100" fill="#d18512" y="30" x='25' />
                                <rect width="20" height="20" fill="#9310eb" y='10' x='10' />
                            </svg>
                            uwenayoallain
                        </a>
                    </Link>
                </div>
                <div className="mt-2 text-center h-full">
                    <p className="text-lg">
                        Site Map
                    </p>
                    <div>
                        <Link href={"/"}><a className="link">Home</a></Link>
                    </div>
                    <div>
                        <Link href={"/about"}><a className="link">About</a></Link>
                    </div>
                    <div>
                        <Link href={"/blog"}><a className="link">Blog</a></Link>
                    </div>
                    <div>
                        <Link href={"/newsletter"}><a className="link">Newsletter</a></Link>
                    </div>
                    <div>
                        <Link href={"/uses"}><a className="link">Uses</a></Link>
                    </div>
                    <div>
                        <Link href={"/dashboard"}><a className="link">Dashboard</a></Link>
                    </div>
                    <div>
                        <Link href={"/timeline"}><a className="link">Timeline</a></Link>
                    </div>
                    <div>
                        <Link href={"/sitemap"}><a className="link">Sitemap</a></Link>
                    </div>
                </div>
                <div className="mt-2  h-full col-span-1">
                    <p className="text-lg">
                        Newsletter
                    </p>

                    <p className="dark:text-gray-300 text-gray-700">Stay up to date with the latest news and updates</p>
                </div>
            </div>
            <p className="absolute bottom-0 text-center">All right reserved - uwenayoallain</p>
        </div>
    );
}
