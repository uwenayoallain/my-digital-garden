import "@/styles/globalStyles.css";
import "@/styles/prism.css";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/utils/Themes";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import Router from "next/router";
function MyApp({ Component, pageProps }) {
  Router.onRouteChangeStart = () => {
    NProgress.start();
  };
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();
  const [theme, setTheme] = useState("");
  const handleTheme = (theme) => {
    setTheme(theme);
    const nprogress = document.querySelector("#nprogress");
    if (nprogress) {
      nprogress.classList.add(theme != undefined && theme.trim());
    }
  };
  const path = useRouter().asPath.trim().replace(/#.*/g, "").replace("/", "");
  return (
    <>
      <DefaultSeo
        title='uwenayoallain'
        description="I am a developer, a blogger and an open source lover based in Rwanda. This is my digital garden, where I write about the things I'm working on and share whatI've learned."
      />
      <ThemeProvider>
        <Head>
          <link rel='manifest' href='./site.webmanifest' />
          <link rel='alternate' type='application/rss+xml' href='/rss.xml' />
          <link rel='alternate' type='application/atom+xml' href='/atom.xml' />
          <link rel='alternate' type='application/json' href='/feed.json' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='keywords' content='uwenayo allain' />
          <link
            rel='shortcut icon'
            href='./images/my-image.jpg'
            type='image/x-icon'
          />
          <title>uwenayoallain | {path == "" ? "home" : path}</title>
        </Head>
        <div
          className={`main relative w-full dark:bg-gray-900 dark:text-white ${theme}`}
          id='main'>
          <div className='relative'>
            <Header currentTheme={handleTheme} />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} />
            </AnimatePresence>
          </div>
          <hr className='dark:border-gray-600' />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
