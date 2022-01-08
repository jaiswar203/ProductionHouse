import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"



// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const Cards = ({ data }) => {
    const breakpoinst = {
        "640": {

        }
    }
    return (
        <Swiper slidesPerView={1} spaceBetween={30} className="mySwiper">
            {data.map((d) => (
                <SwiperSlide>
                    <div className="card" key={d} >
                        <div className="card-media">
                            <img src={d.link} />
                        </div>
                        <div className="card-content">
                            <header className="card-header">
                                <span className="card-date">December 27, 2021</span>
                                <h3>
                                    <a href="#">Scent in the Voyages</a>
                                </h3>
                            </header>
                            <div className="card-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore vero
                                    natus rem necessitatibus itaque perferendis nulla laborum debitis eius
                                    delectus, dolor optio. Modi, laboriosam amet.
                                </p>
                            </div>
                            <footer className="card-footer">
                                <a href="#" className="read-more-link">
                                    Read more
                                    <svg fill="none" viewBox="0 0 16 8">
                                        <path
                                            d="M15.354 4.354a.5.5 0 000-.708L12.172.464a.5.5 0 10-.708.708L14.293 4l-2.828 2.828a.5.5 0 10.707.708l3.182-3.182zM0 4.5h15v-1H0v1z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </footer>
                        </div>
                        <div className="card-border">
                            <span className="top" />
                            <span className="right" />
                            <span className="bottom" />
                            <span className="left" />
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Cards
