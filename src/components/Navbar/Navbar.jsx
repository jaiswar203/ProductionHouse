import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from "react"
import Logo from '../../images/logo.png'

const Navbar = () => {
    const [showIcon, setShowIcon] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [winWid, setWinWid] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    useEffect(() => {
        setWinWid(window.innerWidth)
    }, [winWid, showMenu])

    useEffect(() => {

    }, [showIcon, showMenu])

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 10)
        })
    }, [scroll])
    console.log({ scroll })
    return (
        <header className="header">
            <Link href={"/"} passHref>
                <a className="logo" style={{transition:"all .5s ease-in-out"}}>
                    <Image src={Logo} width={ winWid<500 ? 80 : 100} height={winWid<500 ? 80 : 100} />
                </a>
            </Link>
            <input
                className="menu-icon"
                type="checkbox"
                id="menu-icon"
                name="menu-icon"
            />
            <label htmlFor="menu-icon" />
            <nav className="nav">
                <ul className="pt-5">

                    <li>
                        <Link passHref href="/" >Home</Link>
                    </li>
                    <li>
                        <Link passHref href="/about" >About</Link>
                    </li>
                    <li>
                        <Link passHref href="/movies" >Movies</Link>
                    </li>
                    <li>
                        <Link passHref href="/news" >News</Link>
                    </li>
                    <li>
                        <Link passHref href="/gallery" >Gallery</Link>
                    </li>
                    <li>
                        <Link passHref href="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
