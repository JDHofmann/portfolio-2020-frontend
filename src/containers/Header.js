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
            <NavLink
                title="home page"
                to="/"
                className="title-wrapper"
            >
                <h1>JD Brewer-Hofmann</h1>
            </NavLink>
            <span className="line"></span>
            <span className="path path-begin-end"></span>
            <p className="subtitle"
            >Full Stack Web Developer & inclusive UX/UI enthusiast</p>                
        </li>

    )
}
export default Header