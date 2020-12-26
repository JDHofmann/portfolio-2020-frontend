import React from 'react'
import Slider from './Slider'
import tom01 from '../images/tombardier01.png'
import zen from '..//images/zen.png'
import Links from '../containers/Links'

export const Tombardier = () => {

    const images = [tom01, zen];

    const links = [
        {linkUrl: "https://kind-mclean-3c9c2c.netlify.app/index.html",
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
            {/* <Slider 
                images={images}
            /> */}
        <Links links={links}/>
        </>
    )
}