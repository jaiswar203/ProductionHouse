import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from "react"
import Logo from '../../images/logo.png'

const Navbar = () => {
    const [showIcon, setShowIcon] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [winWid, setWinWid] = useState(0)
    const [showMenu, setShowMenu] = useState(false)
    useEffect(()=>{
        setWinWid(window.innerWidth)
    },[winWid,showMenu])

    useEffect(()=>{
        
    },[showIcon,showMenu])

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY>20)
        })
    },[scroll])
    console.log({scroll})
    return (
        <header className={`triflix__header ${scroll ? "sticky": ""}`}>
            <div className="triflix__header-hamburger">
                <i className={`fas fa-${showMenu ? "times": "bars"}`} onClick={()=>setShowMenu(!showMenu)}></i>
            </div>
            <div className="triflix__header-logo">
                {/* <Image src={Logo} width={winWid ? 100 : 150} height={winWid ? 100 : 150} objectFit="contain"  /> */}
                <Image src={Logo} width={winWid<=880 ? 100 : 150} height={winWid<=880 ? 100 : 150} objectFit="contain"  />
            </div>
            <div className={`triflix__header-links ${showMenu && "show"}`}>
                <li className="triflix__header-links__item">
                    <Link href={"/"} passHref>Home</Link>
                </li>
                <li className="triflix__header-links__item">
                    <Link href={"/movies"} passHref>Movies</Link>
                </li>
                <li className="triflix__header-links__item">
                    <Link href={"/about"} passHref>About Us</Link>
                </li>
                <li className="triflix__header-links__item">
                    <Link href={"/social"} passHref>Social</Link>
                </li>
                <li className="triflix__header-links__item">
                    <Link href={"/contact"} passHref>Contact Us</Link>
                </li>
            </div>
            <div className="triflix__header-search">
                    <i className="fas fa-search" onClick={() => setShowIcon(!showIcon)} />
            </div>
            <div className={`triflix__header-searchBox ${showIcon && "show"}`}>
                <input type="search" placeholder="Search For Movie" />
                <div className="cross">
                    <i className="fas fa-times" onClick={()=>setShowIcon(false)} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
