import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { data } from '../../db/data'
import Modal from './Modal'

const Gallery = () => {
    const [modal, setModal] = useState(false)
    const [check, setCheck] = useState(false)
    const [imgUrl, setImgUrl] = useState("")
    const [switches, setSwitches] = useState(false)
    useEffect(() => {

    }, [modal, check, imgUrl])

    let view = true
    const imgHandler = (isVid, img) => {
        if (isVid) {
            setModal(true)
            setImgUrl(img)
            setCheck(true)
        }
    }

    const vidHandler = (isVid, url) => {
        if (isVid) {
            setModal(true)
            setCheck(false)
            setImgUrl(url)
        }
    }

    return (
        <div className='triflix__gallery'>
            <div className="triflix__gallery-heading">
                <h1>Gallery</h1>
                <span></span>
            </div>
            <div className="triflix__gallery-switch" >
                <div className="triflix__gallery-switch__image" onClick={() => setSwitches(false)}>
                    <h3 className={!switches ? "show" : ""}>Images</h3>
                    <span className={!switches ? "show" : ""} ></span>
                </div>
                <div className="triflix__gallery-switch__video" onClick={() => setSwitches(true)} >
                    <h3 className={switches ? "show" : ""}>Videos</h3>
                    <span className={switches ? "show" : ""} > </span>
                </div>
            </div>

            <div className="triflix__gallery-content">
                {!switches ? (
                    data.galley.map((d, i) => (
                        <div className="triflix__gallery-content__item" key={i}>
                            <Image src={d.image} width={400} height={400} objectFit='cover' onClick={() => { imgHandler(view, d.image) }} />
                        </div>
                    )
                    )
                ) : (
                    data.galley.map((d, i) => d.isVideo && (
                        <div className="triflix__gallery-content__item" key={i} onClick={() => { vidHandler(view, d.video) }}>
                            <Image src={d.image} width={400} height={400} objectFit='cover' />
                            <div className="play-button" >
                                <div className="play-button__circle">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                        </div>
                    ))

                )}
            </div>
            {modal && (
                <Modal setHandle={setModal} isImg={check} imgUrl={imgUrl} />
            )}
        </div>
    )
}

export default Gallery
