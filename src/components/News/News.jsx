import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { data } from '../../db/data'

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
        <div className='triflix__news'>
            <div className="triflix__news-latest">
                <div className="triflix__news-latest__heading">
                    <h1>Latest</h1>
                    <span></span>
                </div>
                <div className="triflix__news-latest__content">
                    <Swiper slidesPerView={1} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} speed={1000} className="mySwiper" breakpoints={breakpoints} loop>
                        {data.news.map((d, i) => (
                            <SwiperSlide className="triflix__news-latest__content-item" key={d.link}>
                                <Link href={`/news/${i}`} passHref>
                                    <Image src={d.link} width={500} height={300} alt="" objectFit="cover" />
                                </Link>
                                <Link passHref href={`/news/${i}`}>
                                    <div className="triflix__news-latest__content-item">
                                        <h3>{d.title}</h3>
                                        <p>{d.date}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="triflix__news-latest__content">
                    <Swiper slidesPerView={1} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} speed={1000} className="mySwiper" breakpoints={breakpoints} loop>
                        {data.news.map((d, i) => (
                            <SwiperSlide className="triflix__news-latest__content-item" key={d.link}>
                                <Link href={`/news/${i}`} passHref>
                                    <Image src={d.link} width={500} height={300} alt="" objectFit="cover" />
                                </Link>
                                <Link passHref href={`/news/${i}`}>
                                    <div className="triflix__news-latest__content-item">
                                        <h3>{d.title}</h3>
                                        <p>{d.date}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className="triflix__news-trending">
                <div className="triflix__news-trending__heading">
                    <h1>Trending</h1>
                    <span></span>
                </div>
                <div className="triflix__news-trending__content">
                    <Swiper slidesPerView={1} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} speed={1000} className="mySwiper" breakpoints={breakpoints} loop>
                        {data.news.map((d, i) => (
                            <SwiperSlide className="triflix__news-trending__content-item" key={d.link}>
                                <Link href={`/news/${i}`} passHref>
                                    <Image src={d.link} width={500} height={300} alt="" objectFit="cover" />
                                </Link>
                                <Link passHref href={`/news/${i}`}>
                                    <div className="triflix__news-trending__content-item">
                                        <h3>{d.title}</h3>
                                        <p>{d.date}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default News
