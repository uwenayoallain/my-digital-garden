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

          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} />
          </AnimatePresence>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
export default MyApp;
