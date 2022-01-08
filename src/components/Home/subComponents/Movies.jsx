import { useEffect, useState } from "react"
import Cards from "./Cards"
import { data } from '../../../db/data'
import Link from "next/link"

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
            <div className="triflix__home-movies__switch">
                <div className="triflix__home-movies__switch-left" onClick={leftClickHandler} >
                    <h3>Upcoming</h3>
                    <div className={`active ${toggle ? "show" : ""}`}></div>
                </div>
                <div className="triflix__home-movies__switch-right" onClick={rightClickHandler}>
                    <div className={`active ${toggle1 ? "show" : ""}`}></div>
                    <h3>Released</h3>
                </div>
            </div>

            <div className="triflix__home-movies__cards">
                <Cards data={newData} />
            </div>
            <Link href={"/movies"}>

                <div className="triflix__home-movies__redirect">
                    {/* <i class="fal fa-long-arrow-right"></i> */}
                    <h3>More</h3>
                    <div className="triflix__home-movies__redirect-arrow" />
                </div>
            </Link>
        </>
    )
}

export default Movies



