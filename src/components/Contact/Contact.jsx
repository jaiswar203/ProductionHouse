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
                                <input type="text"  placeholder='Message' />
                            </div>
                            <div className="button">
                                <input type="button" defaultValue="Send Now" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
