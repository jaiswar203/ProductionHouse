import Logo from '../../images/logo.png'
import Head from 'next/head'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

import { MdLocationOn, MdOutlineMailOutline, MdPhone } from 'react-icons/md'


const Footer = () => {
    return (
        <footer>
            <div className="maincontainer">
                <div className="sec aboutus">
                    <h2>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure facilis
                        cum odio. Officia vero alias impedit cupiditate vel voluptates rerum cum
                        ipsam harum earum dolorem repellat, repellendus consequatur tenetur
                        nobis. Fuga earum, pariatur culpa suscipit quod, sint in illo laborum
                        aspernatur, quisquam assumenda voluptates voluptatem!
                    </p>
                    <ul className="icon">
                        <li>
                            <a href="#">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="sec quicklinks">
                    <h2>Quick Link</h2>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Movies</a>
                        </li>
                        <li>
                            <a href="#">Social</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="sec contact">
                    <h2>Contact Info</h2>
                    <ul className="info">
                        <li>
                            <span>
                                <MdLocationOn />
                            </span>
                            <span>
                                Mumbai,Maharashtra
                            </span>
                        </li>
                        <li>
                            <span>
                                <MdPhone />
                            </span>
                            <p>
                                <a href="#">12343234</a>
                            </p>
                        </li>
                        <li>
                            <span>
                                <MdOutlineMailOutline />
                            </span>
                            <p>
                                <a href="#">contact@kmaxdigital.com</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>



    )
}

export default Footer
