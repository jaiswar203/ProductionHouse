import React, { useEffect } from 'react'

const Modal = ({ setHandle, isImg, imgUrl }) => {

    return (

        <div className="triflix__modal-item" data-aos="zoom-in-up" >
            {isImg ?
                (
                    <div>
                        <img src={imgUrl} alt="" />
                    </div>
                ) : (

                    <div>
                        <iframe src={`https://www.youtube.com/embed/${imgUrl}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                )
            }
            <div className="close" onClick={() => setHandle(false)}>
                <i className="fas fa-times"></i>
            </div>
        </div>

    )
}

export default Modal
