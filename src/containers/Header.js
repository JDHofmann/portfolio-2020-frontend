import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const grid = {
        gridTemplateRows: "repeat(4, minmax(45px, 7.5vmin))",
        marginBottom: "5vh"
    }

    return (
        <li 
            style={grid}
            className="grid"
        >
            <div
                className="title-wrapper"
            >
                <h1>JD Brewer-Hofmann</h1>
            </div>
            <span className="line"></span>
            <span className="path path-begin-end"></span>
            <p className="row-0 sub-item pad"
            >Full Stack Web Developer & Inclusive UX/UI Enthusiast</p>                
        </li>

    )
}
export default Header