import Link from "next/link";
import ActiveLink from "./Link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Ylogo from "@/public/images/y-logo.png";
import { Toggle } from "@/utils/Themes";
export default function Header({ currentTheme }) {
  let themes = [
    "theme-default",
    "theme-violet",
    "theme-green",
    "theme-indigo",
    "theme-red",
    "theme-amber",
    "theme-pink",
    "theme-teal",
    "theme-fuchsia",
    "theme-rose  ",
  ];
  let initialTheme = "theme-default";
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === null
    ) {
      localStorage.setItem("theme", "theme-default");
    }
    currentTheme(theme);
    localStorage.setItem("theme", theme);
  });

  if (
    typeof window !== "undefined" &&
    window.localStorage.getItem("theme") !== null
  ) {
    if (!themes.includes(window.localStorage.getItem("theme"))) {
      window.localStorage.setItem("theme", "theme-default");
    }
    initialTheme = window.localStorage.getItem("theme");
  }

  const [theme, setTheme] = useState(initialTheme);
  function changeTheme(currenttheme) {
    if (!themes.includes(currenttheme)) {
      currenttheme = "theme-default";
    }
    let index = themes.indexOf(currenttheme);
    setTheme(themes[++index]);
  }
  return (
    <div
      className={`flex items-center justify-center  bg-white dark:bg-gray-900 z-30 shadow-sm`}>
      <Link href={"/"}>
        <a className='w-10 my-5 cursor-pointer '>
          <Image src={Ylogo} alt='Y logo by uwenayoallain' draggable='false' />
        </a>
      </Link>
      <ActiveLink
        activeClassName='text-skin-base before:border-skin-base dark:before:border-skin-base before:scale-x-75'
        href={"/blog"}>
        <a className='link'>Blog</a>
      </ActiveLink>
      <ActiveLink
        activeClassName='text-skin-base before:border-skin-base dark:before:border-skin-base before:scale-x-75'
        href={"/about"}>
        <a className='link'>About</a>
      </ActiveLink>
      <div className='flex justify-end w-1/3'>
        <button
          onClick={() => changeTheme(theme)}
          className={`cursor-pointer mx-3 p-3 rounded-full text-skin-base hover:bg-skin-inverted/30 transition`}>
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
        <Link href={"/rss.xml"}>
          <a className='p-2 ml-3 opacity-50 cursor-pointer hover:opacity-100 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path d='M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z' />
              <path d='M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z' />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}
