import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    // console.log(window.location.pathname)
    return (
        <li className="li-top-grid grid">
            {window.location.pathname==="/" ? <div className="pho-title-wrapper">
                <h1>JD Brewer-Hofmann</h1>
            </div>
            : 
                <NavLink
                    title="home page"
                    to="/"
                    className="title-wrapper"
                >
                    <h1>JD Brewer-Hofmann</h1>
                </NavLink>
            }
                <span className="line"></span>
                <span className="box br-tr-br"></span>
                <p className="subtitle"
                >Web Developer</p>                
            </li>

    )
}
export default Header