import React from 'react'
import { NavLink } from 'react-router-dom'

import Links from '../containers/Links'

export const Bestbey = () => {

    const links = [
        {linkUrl: "https://bestbey.netlify.app/",
        linkText: "Live Demo"},
        {linkUrl: "https://github.com/JDHofmann/bestbey-frontend",
        linkText: "Frontend Repo"},
        {linkUrl: "https://github.com/JDHofmann/bestbey-backend-v2.1",
        linkText: "Backend Repo"}
    ]

    return ( 
        <>  
        <li>
            <div className="li-project-grid grid">
                <h2>Bestbey</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                <p 
                    className="subtitle"
                >E-commerce</p>
                <span className="box box-item-1-2-end br-br"></span>
                <p className="description-sub-item">Bestbey is an e-commerce site utilizing a retail product database, a full user interface, and a customized shopping cart. Built with React and a Ruby on Rails API.</p>
            </div>
        </li>
        <Links links={links}/>
        <NavLink 
            className="home-btn"
            to="/"><h3>Home Page</h3></NavLink>
        </>
    )
}