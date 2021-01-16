import React from 'react'
// import biopic from '../images/bio-pic-small-cropped.jpg'


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
            <p className="sub-item row-0">I am full stack web developer, inclusive UX/UI enthusiast, musician, and graduate of Flatiron School's software engineering program. I enjoy building inclusive systems and filling my apartment with plants.</p>
                <span className="vert-line-box"><span></span></span>
                <img alt="" className="sub-item  biopic" src={process.env.PUBLIC_URL + '/images/bio-pic-small-cropped.jpg'}/>                
        </li>

    )
}
export default Header