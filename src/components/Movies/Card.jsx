import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const Card = ({className="",title,speed,data}) => {
    const breakpoints = {
        "380": {
            slidesPerView: 2
        },
        "600": {
            slidesPerView: 3
        },
        "900": {
            slidesPerView: 4
        },
        "1100": {
            slidesPerView: 5
        },
        "1300": {
            slidesPerView: 6
        },
        "1600": {
            slidesPerView: 5
        },
        "2000":{
            slidesPerView:6
        }
    }
    return (
        <div className={`triflix__movies-${className}`}>
            <div className={`triflix__movies-${className}__heading`}>
                <h1>{title}</h1>
                <span></span>
            </div>
            <div className={`triflix__movies-${className}__content`}>
                <Swiper slidesPerView={1} spaceBetween={10} autoplay speed={speed ? speed : 600} breakpoints={breakpoints} >
                    {
                        data.map((d, i) => (
                            <SwiperSlide className={`triflix__movies-${className}__content-item`} key={i}>
                                <Image src={d.link} width={300} height={430} />
                                <p>{d.name}({d.date}) </p>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Card
