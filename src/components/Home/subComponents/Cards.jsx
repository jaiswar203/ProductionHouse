import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"


// import Swiper core and required modules
import SwiperCore, {
    Pagination,Autoplay,EffectCoverflow
} from 'swiper';
import { useEffect } from "react";

// install Swiper modules
SwiperCore.use([Pagination,Autoplay,EffectCoverflow]);

const Cards = ({ data }) => {
    const breakpoinst = {
        "350": {
            slidesPerView:2,
            spaceBetween:10
        },
        "600": {
            slidesPerView:3,
            spaceBetween:10
        },
        "1000": {
            slidesPerView:4,
            spaceBetween:10
        },
        "1200": {
            slidesPerView:3,
            spaceBetween:10
        },
        "1400": {
            slidesPerView:3,
            spaceBetween:10
        },
        "2000": {
            slidesPerView:4,
            spaceBetween:10
        },
    }
    useEffect(()=>{

    },[data])
    console.log({data})
    return (
        <Swiper slidesPerView={1} spaceBetween={30} className="mySwiper" centeredSlides speed={700} autoplay={true} breakpoints={breakpoinst} loop effect="coverflow" >
            {data.map((d, i) => (
                <SwiperSlide key={i}>
                    <img src={d.link} alt="" />
                    <div className="triflix__home-movies__cards-detail">
                        <h4>{d.name}
                            <br />
                            <span>
                                {`(${d.release})`}
                            </span>
                        </h4>
                        {/* <h4></h4> */}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Cards
