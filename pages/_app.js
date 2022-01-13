import SwiperCore, {
  Pagination,Autoplay,EffectCoverflow
} from 'swiper';
import { useEffect } from "react";
import Head from "next/head";
import Aos from "aos";

import "../styles/css/index.css";
import "aos/dist/aos.css";
import "swiper/css";
import 'react-typist/dist/Typist.css'


SwiperCore.use([Pagination,Autoplay,EffectCoverflow]);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
