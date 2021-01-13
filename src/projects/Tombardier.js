import React from 'react'
import Links from '../containers/Links'
import { NavLink } from 'react-router-dom'

export const Tombardier = () => {


    const links = [
        {linkUrl: "https://tombardier.netlify.app/",
        linkText: "Live Demo"},
        {linkUrl: "https://github.com/JDHofmann/tombardier-frontend-dev",
        linkText: "Frontend Repo"},
        {linkUrl: "https://github.com/JDHofmann/tombardier-backend-dev",
        linkText: "Backend Repo"}
    ]

    const grid = {
        gridTemplateRows: `repeat(4, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    return ( 
        <>  
        <li>
            <div 
                style={grid}
                className="grid"
            >
                <h2>Tombardier CMS</h2>
                <span className="line"></span>
                <span className="path path-0"></span>
                <p 
                    className="sub-item row-0 pad"
                >Portfolio Building Made Simple</p>
                <span className="path path-1 path-end"></span>
                <p className="sub-item row-1 pad">Tombardier comes out of the box ready to provide users with their own personal portfolio site. With an inline editable UI, users can edit content right in their browsers. Built with React, Redux, Ruby on Rails, Active Storage, and AWS cloud storage.</p>
            </div>
        </li>
        <Links links={links}/>
        <NavLink 
            className="home-btn"
            to="/"><h3>Home Page</h3></NavLink>
        </>
    )
}