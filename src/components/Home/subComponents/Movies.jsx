import { useState } from "react"
import Cards from "./Cards"
import {data} from '../../../db/data'

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
                <Cards data={data.data} />
            </div>
        </>
    )
}

export default Movies



