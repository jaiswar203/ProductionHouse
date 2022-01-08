import React from 'react'

const Carousel = () => {
    return (
        <div className='triflix__home-carousel__video'>
            <video src="https://res.cloudinary.com/dykwfe4cr/video/upload/v1639933313/video_1_brqywe.mp4" autoPlay muted loop />
            <div className="content">
                <h1>Batman Begins</h1>
                <div className="content__director">
                    <p>Director:</p>
                    <p>Zack Synder</p>
                </div>
                <div className="content__actor">
                    <p>Actors:</p>
                    <p>Robert Peterson,Ben Affleck</p>
                </div>
            </div>
        </div>
    )
}

export default Carousel
