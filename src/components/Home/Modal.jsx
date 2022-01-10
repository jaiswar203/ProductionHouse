import React, { useEffect } from 'react'

const Modal = ({setHandle,modal,url=""}) => {
    useEffect(()=>{

    },[modal])
    return (
        
            <div className="triflix__modal-item" >
                <div>
                    <iframe src={`https://www.youtube.com/embed/${url}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="close" onClick={()=>setHandle(false)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
        
    )
}

export default Modal
