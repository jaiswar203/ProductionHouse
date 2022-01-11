

const Contact = (props) => {
    return (
        <>
            <div className="triflix__home-contact__heading">
                <h1>Contact Us</h1>
                <span></span>
            </div>
            <div className="triflix__home-contact__content">
                <div className="triflix__home-contact__content-map" >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64333309114!2d72.74110225691095!3d19.08252231683217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1641878765028!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                </div>
                <form className="triflix__home-contact__content-contact">
                    <div className="normal">
                        <input type="text" className="normal__text" placeholder="Name" />
                        <input type="text" className="normal__text" placeholder="Email" />
                    </div>
                    <input name="message" type="text" className="large__text" placeholder="Message"></input>
                    <div className="submit">
                        <h2>Submit</h2>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
