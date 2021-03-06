import React from 'react'

const Contact = () => {
    return (
        <div className='triflix__contact'>
            <div className="container">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i className="fas fa-map-marker-alt" />
                            <div className="topic">Address</div>
                            <div className="text-one">Surkhet, NP12</div>
                            <div className="text-two">Birendranagar 06</div>
                        </div>
                        <div className="phone details">
                            <i className="fas fa-phone-alt" />
                            <div className="topic">Phone</div>
                            <div className="text-one">+0098 9893 5647</div>
                            <div className="text-two">+0096 3434 5678</div>
                        </div>
                        <div className="email details">
                            <i className="fas fa-envelope" />
                            <div className="topic">Email</div>
                            <div className="text-one">triflixlab@gmail.com</div>
                            <div className="text-two">info.triflix@gmail.com</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>
                            If you have any work from me or any types of quries related to my
                            tutorial, you can send me message from here.
                        </p>
                        <form >
                            <div className="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div className="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div className="input-box message-box">
                                <input type="text" placeholder='Message' />
                            </div>
                            <div className="button">
                                <input type="button" defaultValue="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="map">
                <div className="map-heading">
                    <h1>Visit Us</h1>
                    <span></span>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64333309114!2d72.74110225691095!3d19.08252231683217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1642257505075!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>

        </div>
    )
}

export default Contact
