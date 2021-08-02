import Link from "next/link";
import ActiveLink from "./Link";
import { useEffect, useState } from "react";
import { Toggle } from "@/utils/Themes";
export default function Header({ currentTheme }) {
  let themes = ["theme-default", "theme-violet", "theme-green", "theme-indigo", "theme-red", "theme-amber", "theme-pink", "theme-teal", "theme-fuchsia", "theme-rose  "];
  let initialTheme = "theme-default";
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', "theme-default");
    }
    currentTheme(theme);
    localStorage.setItem('theme', theme);
  }
  );

  if (typeof window !== 'undefined' && window.localStorage.getItem("theme") !== null) {
    if (!themes.includes(window.localStorage.getItem("theme"))) {
      window.localStorage.setItem("theme", "theme-default");
    }
    initialTheme = window.localStorage.getItem('theme');
  }

  const [theme, setTheme] = useState(initialTheme);
  function changeTheme(currenttheme) {
    if (!themes.includes(currenttheme)) {
      currenttheme = "theme-default";
    }
    let index = themes.indexOf(currenttheme);
    setTheme(themes[++index])
  }
  return (
    <div className={`flex items-center justify-center p-5 bg-white dark:bg-gray-900 z-30 shadow-sm`}>
      {/* sticky top-0 */}
      <Link href={'/'}>
        <a className="cursor-pointer">
          <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="35" height="15" fill="#000" x="20" y='10' />
            <rect width="20" height="20" rx="100" fill="#d18512" y="30" x='25' />
            <rect width="20" height="20" fill="#9310eb" y='10' x='10' />
          </svg>
        </a>
      </Link>
      <ActiveLink activeClassName='text-skin-base link before:border-skin-base dark:before:border-skin-base before:scale-x-75' href={"/"}>
        <a href='' className='link'>
          Home
        </a>
      </ActiveLink>
      <ActiveLink activeClassName='text-skin-base link before:border-skin-base dark:before:border-skin-base before:scale-x-75' href={"/blog"}>
        <a className='link'>Blog</a>
      </ActiveLink>
      <button
        onClick={() => changeTheme(theme)}
        className={`cursor-pointer mx-3 p-3 rounded-full text-skin-base hover:bg-skin-inverted/30 transition`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'>
          <rect width='100%' height='100%' fill='currentColor' rx='50%' />
        </svg>
      </button>
      <Toggle />
      <a
        className='px-3.5 py-2.5 rounded m-3 hover:bg-skin-base dark:hover:bg-skin-inverted/70'
        href={"https://github.com/uwenayoallain/uwenayoallain.com"}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          viewBox='0 0 16 16'>
          <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
        </svg>
      </a>
    </div>
  );
}
