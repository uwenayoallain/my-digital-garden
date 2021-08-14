import "@/styles/globalStyles.css";
import "@/styles/prism.css";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/utils/Themes";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import defaultSeoConfig from "./../next-seo.json";
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
        {...defaultSeoConfig}
        title={path == "" ? "home" : path}
        canonical={process.env.NEXT_PUBLIC_VERCEL_URL}
      />
      <SocialProfileJsonLd
        type='Person'
        name='uwenayoallain'
        url={process.env.NEXT_PUBLIC_VERCEL_URL}
        sameAs={["https://twitter.com/uwenayoallain"]}
      />
      <ThemeProvider>
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
