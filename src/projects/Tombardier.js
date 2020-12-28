import React from 'react'
import Links from '../containers/Links'
import { NavLink } from 'react-router-dom'

export const Tombardier = () => {


    const links = [
        {linkUrl: "https://youtu.be/p_RS2x-V300",
        linkText: "Live Demo"},
        {linkUrl: "https://github.com/JDHofmann/tombardier-frontend-dev",
        linkText: "Frontend Repo"},
        {linkUrl: "https://github.com/JDHofmann/tombardier-backend-dev",
        linkText: "Backend Repo"}
    ]

    return ( 
        <>  
        <li>
            <div className="li-project-grid grid">
                <h2>Tombardier CMS</h2>
                <span className="line"></span>
                <span className="box bt-light br-tr"></span>
                <p 
                    className="subtitle"
                >Portfolio Building Made Simple</p>
                <span className="box box-item-1-2-end br-br"></span>
                <p className="description-sub-item">Tombardier comes out of the box ready to provide users with their own personal portfolio site. With an inline editable UI, users can edit content right in their browsers.Built with React, Redux, and Ruby on Rails</p>
            </div>
        </li>
        <Links links={links}/>
        <NavLink 
            className="home-btn"
            to="/"><h3>Home Page</h3></NavLink>
        </>
    )
}