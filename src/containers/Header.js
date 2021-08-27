import React from 'react'

const Header = () => {

    const grid = {
        gridTemplateRows: "repeat(4, minmax(35px, 5vh) minmax(35px, auto) )",
        marginBottom: "5vh"
    }

    return (
        <li 
            style={grid}
            className="grid"
        >
            {/* <div
                className="title-wrapper"
            > */}
                <h1>JD Brewer-Hofmann</h1>
            {/* </div> */}
            <span className="line"></span>
            <span className="path path-begin-end"></span>
            <p className="sub-item-text row-0">I am web developer, UX/UI developer, musician, and graduate of Flatiron School's software engineering program. I enjoy building inclusive systems and filling my apartment with plants.</p>
            <span className="vert-line-box head"><span></span></span>
            <img alt="" className="sub-item  biopic" src={process.env.PUBLIC_URL + '/images/bio-pic-small-cropped.jpg'}/>                
        </li>

    )
}
export default Header