import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
    Pagination,Navigation,EffectFade
} from 'swiper';
import Movies from './subComponents/Movies';
import Gallery from './subComponents/Gallery';
import News from './subComponents/News';
import Contact from './subComponents/Contact';

// install Swiper modules
SwiperCore.use([Pagination,Navigation,EffectFade]);

const Home = () => {

    return (
        <div className='triflix__home'>
            <div className="triflix__home-carousel">
                <Swiper pagination={true} navigation={true} loop={true} speed={700} className="mySwiper" effect='fade'>
                    {/* Use 1600 x710 images */}
                    <SwiperSlide>
                        <img src="https://dharma-production.com/api/upload/readFile?file=61bb4085cb83230366449f08.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dharma-production.com/api/upload/readFile?file=6196468bc4e55f2ce8dbd7f6.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://dharma-production.com/api/upload/readFile?file=61bb4085cb83230366449f08.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="triflix__home-movies">
                <Movies />
            </div>
            <div className="triflix__home-gallery">
                <Gallery />
            </div>
            <div className="triflix__home-news">
                <News />
            </div>
            <div className="triflix__home-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Home
