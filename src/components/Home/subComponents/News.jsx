import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper'
import Image from 'next/image'
import Link from 'next/link'
import { data } from "../../../db/data";

SwiperCore.use([Navigation])

const News = () => {
    const breakpoints = {

        "530": {
            slidesPerView: 2,
            spaceBetween: 20
        },
        "1100": {
            slidesPerView: 3,
            spaceBetween: 20
        },
        "1500": {
            slidesPerView: 4,
            spaceBetween: 10
        },
        "2100": {
            slidesPerView: 5,
            spaceBetween: 10
        },
    }
    return (
        <>
            <div className="triflix__home-news__heading">
                <h1>News</h1>
                <span></span>
            </div>
            <div className="triflix__home-news__content">
                <Swiper slidesPerView={1} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} speed={1000} className="mySwiper" breakpoints={breakpoints} loop>
                    {data.news.map((d,i) => (
                        <SwiperSlide className="triflix__home-news__content-item" key={d.link}>
                            <Link href={`/news/${i}`} passHref>
                                <Image src={d.link} width={500} height={300} alt="" objectFit="cover" />
                            </Link>
                            <Link passHref href={`/news/${i}`}>
                                <div className="triflix__home-news__content-item__data">
                                    <h3>{d.title}</h3>
                                    <p>{d.date}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Link href={"/news"} passHref>
                <div className="triflix__home-news__redirect">
                    <h3>More</h3>
                    <div className="triflix__home-gallery__redirect-arrow" />
                </div>
            </Link>
        </>
    )
}

export default News
