import Image from "next/image"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";


const Detail = ({ data }) => {
    const [winWid, setWinWid] = useState(0)

    const breakpoints = {
        "360": {
            slidesPerView: 2
        },
        "700": {
            slidesPerView: 3
        },
        "1200": {
            slidesPerView: 4
        },
        "1400": {
            slidesPerView: 5,
            spaceBetween: 70
        },
        "2000": {
            slidesPerView: 6,
            spaceBetween: 100
        },
        "2400": {
            slidesPerView: 7,
            spaceBetween: 120
        },
    }
    useEffect(() => {
        setWinWid(window.innerWidth)
    }, [winWid,data])

    return (
        <div className='triflix__movdetails'>
            <div className="triflix__movdetails-background">
                <Image src={data.poster} width={winWid < 650 ? 2100 : 1920} height={winWid < 650 ? 900 : 500} alt="" objectFit="cover" layout="responsive" data-aos="zoom-in-up" />
            </div>
            <div className="triflix__movdetails-card">
                <Image src={data.link} width={winWid < 500 ? 180 : 200} height={winWid < 500 ? 200 : 250} objectFit="contain" data-aos="zoom-in-up" />
                <div className="triflix__movdetails-card__content">
                    <div className="info">
                        <h4>Movie:</h4>
                        <p>{data.name}</p>
                    </div>
                    <div className="info">
                        <h4>Genre:</h4>
                        <p>{data.genre}</p>
                    </div>
                    <div className="info">
                        <h4>IMDB:</h4>
                        <p>{data.rating}</p>
                    </div>
                    <div className="info">
                        <h4>Director:</h4>
                        <p>Christopher Nolan</p>
                    </div>
                    <div className="info">
                        <h4>Actor:</h4>
                        <p>Ben Affleck, Gal Gadot</p>
                    </div>
                    <div className="info">
                        <h4>Released:</h4>
                        <p>19th Jan 2022</p>
                    </div>
                </div>
            </div>
            <div className="triflix__movdetails-about">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae quod magnam. Fuga iure, dolorum voluptatem temporibus eaque quae sunt tempora autem minima, laborum inventore accusantium delectus facere voluptas enim.
                    At vero recusandae ex, maiores velit quos quia aliquam veniam praesentium qui similique eveniet non ab reiciendis inventore totam! Eum beatae nostrum corporis! Accusantium totam, minima dolorem sunt vero quos?
                    Voluptates in itaque, saepe eum sed tempore excepturi et odio quam sapiente explicabo vero natus repudiandae, voluptatem harum est quis consequatur? Enim magnam adipisci esse provident beatae eos nemo voluptatum?
                    Enim laboriosam qui delectus, animi nulla ab dolorum aut itaque hic, necessitatibus soluta. Quidem corrupti voluptates a, fugit, earum praesentium ipsam inventore culpa sed molestias repellat eum maxime minus dolore.</p>
            </div>
            <div className="triflix__movdetails-cast">
                <div className="triflix__movdetails-cast__heading">
                    <h1>Cast</h1>
                    <span></span>
                </div>
                <div className="triflix__movdetails-cast__content">
                    <Swiper slidesPerView={1} loop={true} spaceBetween={10} autoplay={{ delay: 3000 }} speed={1000} breakpoints={breakpoints}>
                        <SwiperSlide>
                            <div className="outer-circle">
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="info">
                                <h3>Jhon Doe</h3>
                                <p>Bruce Wayne</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="outer-circle">
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="info">
                                <h3>Jhon Doe</h3>
                                <p>Bruce Wayne</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="outer-circle">
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="info">
                                <h3>Jhon Doe</h3>
                                <p>Bruce Wayne</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="outer-circle">
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="info">
                                <h3>Jhon Doe</h3>
                                <p>Bruce Wayne</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="outer-circle">
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} width={300} height={300} objectFit="cover" />
                            </div>
                            <div className="info">
                                <h3>Jhon Doe</h3>
                                <p>Bruce Wayne</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Detail
