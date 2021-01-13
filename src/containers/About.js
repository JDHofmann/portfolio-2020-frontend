import React from 'react'
import biopic from '../images/bio-pic-small-cropped.jpg'

const About = () => {

    const grid = {
        gridTemplateRows: `repeat(4, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    return (
        <li 
            style={grid}
            className="grid">
                <h2>About</h2>
                <span className="line"></span>
                <span className="path path-begin-end"></span>
                <p className="sub-item row-0">I am web developer, musician, and graduate of Flatiron School's software engineering program. I enjoy building inclusive systems and filling my apartment with plants</p>
                <span className="vert-line-box"><span></span></span>
                <img alt="" className="sub-item  biopic" src={biopic}/>
        </li>
    )
}
export default About