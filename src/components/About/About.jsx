import Card from "./Card"

const About = () => {
    return (
        <div className='triflix__about'>
            <div className="triflix__about-intro">
                <div className="triflix__about-intro__img">
                    <img src="https://www.purecinema.tv/wp-content/uploads/2020/11/A4385B88-B6A1-4F17-8AB8-FD686CC2810B-B4C092D9-8271-4130-BA76-D0AF5B3B76FE-scaled-1366x0-c-default.webp" alt="" data-aos="zoom-in-up" />
                </div>
                <div className="triflix__about-intro__content">
                    <h2> <span>"</span>TriFlix Cinema is Upcoming
                        Booming film production company, which bring great
                        opportunity to the struggling actor.
                        <span>"</span>
                    </h2>
                    <p>-Rajat Bedi</p>
                </div>
            </div>
            <div className="triflix__about-mission">
                <div className="triflix__about-mission__content">
                    <h2>Our Vision & 
                        <br />

                        <span>
                            Mission:-
                        </span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure </p>
                </div>
                <div className="triflix__about-mission__img">
                    <img src="https://www.purecinema.tv/wp-content/uploads/2020/11/DSCF0979_downres-scaled-1024x0-c-default.webp" alt="" data-aos="zoom-in-up" />
                </div>
            </div>
            <div className="triflix__about-card">
                <div className="triflix__about-card__heading">
                    <h1>Our Team</h1>
                    <span></span>
                </div>
                <div className="triflix__about-card__content">
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1642074917/TriFlix/photo-1599566150163-29194dcaad36_qwismp.jpg"} />
                </div>
            </div>
        </div>
    )
}

export default About
