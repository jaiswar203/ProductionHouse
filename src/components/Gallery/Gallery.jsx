import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { data } from '../../db/data'
import Modal from './Modal'

const Gallery = () => {
    const [modal, setModal] = useState(false)
    const [vidUrl, setVidUrl] = useState("")
    const [imgUrl, setImgUrl] = useState("")

    useEffect(() => {

    }, [modal, vidUrl, imgUrl])

    const imgHandler = (isVid, img) => {
        if (!isVid) {
            setModal(true)
            setImgUrl(true)
            setImgUrl(img)
        }
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className='triflix__gallery'>
            <div className="triflix__gallery-heading">
                <h1>Gallery</h1>
                <span></span>
            </div>
            <div className="triflix__gallery-content">
                {data.galley.map((d) => (
                    <div className="triflix__gallery-content__item" >
                        <Image src={d.image} width={400} height={400} objectFit='cover' onClick={() => { imgHandler(d.isVideo, d.image) }} />
                        {d.isVideo && (
                            <div className="play-button">
                                <div className="play-button__circle">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {modal && (
                <Modal url={vidUrl} setHandle={setModal} isImg={imgUrl === "" ? false : true} imgUrl={imgUrl} />
            )}
        </div>
    )
}

export default Gallery
