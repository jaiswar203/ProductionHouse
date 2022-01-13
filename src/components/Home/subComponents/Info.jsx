import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper'
import { data } from '../../../db/data'


SwiperCore.use([Autoplay,EffectCoverflow])
const Info = () => {
    const breakpoints = {
        "410": {
            slidesPerView: 2,
            centeredSlides:true,
            loop: false
        },
        "640": {
            slidesPerView: 3,
            loop: false
        },
        "1000": {
            slidesPerView: 4
        }
    }
    return (
        <>
            <div className="triflix__home-info__heading">
                <h1>Info</h1>
                <span></span>
            </div>
            <div className="triflix__home-info__content">
                <Swiper effect={'coverflow'} grabCursor={true} breakpoints={breakpoints} centeredSlides={false} slidesPerView={1} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }} pagination={false} className="mySwiper" loop={false} 
                    speed={700}
                >
                    {
                        data.info.map((d, i) => (
                            <SwiperSlide className='triflix__home-info__content-item' key={i} >
                                <img src={d.link} width={200} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
    F
}

export default Info
