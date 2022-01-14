import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState, useEffect } from 'react'

import { data } from "../../db/data";
import Card from "./Card";

const Movies = () => {
    const [winWid, setWinWid] = useState(0)

    useEffect(() => {
        setWinWid(window.innerWidth)
    }, [winWid])
    return (
        <div className='triflix__movies'>
            <div className="triflix__movies-carousel">
                <div className="triflix__movies-carousel__heading">
                    <h1>Upcoming Movies</h1>
                    <span></span>
                </div>
                <div className="triflix__movies-carousel__content">
                    <Swiper navigation={true} className="mySwiper" loop speed={700} effect="fade" autoplay>
                        <SwiperSlide>
                            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642081955/TriFlix/1-india-movie-poster-design-bollywood-padmaavat_v5jql1.jpg"} width={2300} height={winWid < 500 ? 1100 : 1000} objectFit="cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642081871/TriFlix/ANTIM__HINDI__Listing_Page95_ai69ja.jpg"} width={2300} height={winWid < 500 ? 1100 : 1000} objectFit="cover" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642081871/TriFlix/ANTIM__HINDI__Listing_Page95_ai69ja.jpg"} width={2300} height={winWid < 500 ? 1100 : 1000} objectFit="cover" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Card title={"Released"} className="released" data={data.moviesCard} speed={600} />
            <Card title={"Past Released"} className="past-released" data={data.moviesCard} speed={800} />
        </div>
    )
}

export default Movies
