import "../styles/globalStyles.css";
import "../styles/app.css";
import "../styles/prism.css";
import Head from "next/head";
import Header from "../components/common/Header";
import Footer from '../components/common/Footer';
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('');
  const handleTheme = (theme) => {
    setTheme(theme);
  }
  return (
    <div className={`main ${theme}`}>
      <Head>
        <title>uwenayoallain.com</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='uwenayo allain' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='site.webmanifest' />
        <link rel='mask-icon' href='./safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
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
  );
}

// export function reportWebVitals(metric) {
//   console.log(metric)
// }
export default MyApp;
