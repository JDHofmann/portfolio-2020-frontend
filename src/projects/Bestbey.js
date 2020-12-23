import React from 'react'
// import Slider from './Slider'

import Links from '../containers/Links'

export const Bestbey = () => {

    // const images = [tom01, zen];

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
                <p className="description-sub-item">Bestbey is an e-commerce site built in React, with a Ruby on Rails backend</p>
            </div>
        </li>
            {/* <Slider 
                images={images}
            /> */}
        <Links links={links}/>
        </>
    )
}