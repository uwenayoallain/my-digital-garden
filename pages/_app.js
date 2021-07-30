import "@/styles/globalStyles.css";
import "@/styles/prism.css";
import Head from "next/head";
import Header from "@/components/common/Header";
import Footer from '@/components/common/Footer';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/utils/Themes";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('');
  const handleTheme = (theme) => {
    setTheme(theme);
  }
  const path = (useRouter().pathname).replace("/", "");
  return (
    <>
      <ThemeProvider>

        <Head>
          <link rel="manifest" href="./site.webmanifest" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta name='keywords' content='uwenayo allain' />
          <link rel="shortcut icon" href="./images/my-image.jpg" type="image/x-icon" />
          <title>uwenayoallain - {path == "" ? "home" : path}</title>
        </Head>
        <div className={`main relative dark:bg-gray-900 dark:text-white ${theme}`} id="main">
          <Header currentTheme={handleTheme} />
          <div className='flex items-center justify-center mt-5'>
            <div className='w-full sm:w-full md:w-9/12 lg:w-7/12 shadow-sm p-1 md:p-5 rounded'>
              <div className='text-center my-3'>
                <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} />
                </AnimatePresence>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
