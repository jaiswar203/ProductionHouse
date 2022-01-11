
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import { data } from '../../../db/data'
import Modal from '../Modal'


// preferred Image Size Should be 1140 × 650 px

const Gallery = () => {
    const [winWidth, setWinWidth] = useState(0)
    const [modal, setModal] = useState(false)
    const [url, setUrl] = useState("")
    useEffect(() => {
        setWinWidth(window.innerWidth)
    }, [winWidth])

    useEffect(() => {
        const body = document.querySelector('.triflix__home')

        if (modal) {
            body.classList.add("show")
        } else {
            body.classList.remove("show")
        }
    }, [modal, url])

    return (
        <>
            <div className="triflix__home-gallery-heading">
                <h1>Gallery</h1>
                <span></span>
            </div>
            <div className="triflix__home-gallery-video">
                {/* {
                    winWidth > 1050 && ( */}
                <div className="triflix__home-gallery-video__preview">
                    {data.movies.map((d, i) => i < 4 && (
                        <>
                            <div className="triflix__home-gallery-video__preview-item" key={d.link}>
                                <img src={d.link} alt="" />
                                <div className="play-button" onClick={() => setModal(true)}>
                                    <div className="play-button_circle" onClick={() => setUrl(d.url)}>
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                {/* )
                } */}
                <div className="triflix__home-gallery-video__showcase">
                    <div className="triflix__home-gallery-video__showcase-video">
                        <img src={data.movies[0].link} alt="" />
                        <div className="play-button" onClick={() => setModal(true)}>
                            <div className="play-button_circle" onClick={() => setUrl(data.movies[0].url)}>
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                    </div>
                    <div className="triflix__home-gallery-video__showcase-video">
                        <img src={data.movies[0].link} alt="" />
                        <div className="play-button" onClick={() => setModal(true)}>
                            <div className="play-button_circle" onClick={() => setUrl(data.movies[0].url)}>
                                <i className="fas fa-play"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                modal && (
                    <Modal setHandle={setModal} modal={setModal} url={url} />
                )
            }
            <Link href={"/gallery"} passHref>
                <div className="triflix__home-gallery__redirect">
                    <h3>More</h3>
                    <div className="triflix__home-gallery__redirect-arrow" />
                </div>
            </Link>
        </>
    )
}

export default Gallery
