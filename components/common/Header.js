import Link from "next/link";
import ActiveLink from "./Link";
import { useEffect, useState } from "react";
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
      className={`flex items-center justify-center p-5 bg-white dark:bg-gray-900 z-30 shadow-sm`}>
      {/* sticky top-0 */}
      <Link href={"/"}>
        <a className='cursor-pointer'>
          <svg
            width='80'
            height='50'
            viewBox='0 0 80 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='35' height='15' fill='#000' x='20' y='10' />
            <rect
              width='20'
              height='20'
              rx='100'
              fill='#d18512'
              y='30'
              x='25'
            />
            <rect width='20' height='20' fill='#9310eb' y='10' x='10' />
          </svg>
        </a>
      </Link>
      <ActiveLink
        activeClassName='text-skin-base before:border-skin-base dark:before:border-skin-base before:scale-x-75'
        href={"/"}>
        <a href='' className='link'>
          Home
        </a>
      </ActiveLink>
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
    </div>
  );
}
