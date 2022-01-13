import { useEffect, useState } from "react"
import Cards from "./Cards"
import { data } from '../../../db/data'
import Link from "next/link"
import {FaRegHandPointRight} from 'react-icons/fa'
const Movies = () => {
    const [toggle, setToggle] = useState(true)
    const [toggle1, setToggle1] = useState(false)

    const leftClickHandler = () => {
        setToggle1(false)
        setToggle(true)
    }
    const rightClickHandler = () => {
        setToggle(false)
        setToggle1(true)

    }
    const newData = toggle ? data.data.filter((d) => d.isReleased === true) : data.data.filter((d) => d.isReleased === false)
    console.log({ newData })
    useEffect(() => {

    }, [newData])
    return (
        <>
            <div className="triflix__home-movies__heading">
                <h1>{toggle ? "Upcoming" : "Released"}</h1>
                <span></span>
            </div>
                <label className="switch" >
                    <input type="checkbox" />
                        <div onClick={()=>setToggle(!toggle)}>
                            <span></span>
                        </div>
                </label>

            <div className="triflix__home-movies__cards" data-aos="zoom-in-up">
                <Cards data={newData} />
            </div>
            <Link href={"/movies"} >
                <div className="triflix__home-movies__redirect" >
                    <FaRegHandPointRight  />
                </div>
            </Link>
        </>
    )
}

export default Movies



