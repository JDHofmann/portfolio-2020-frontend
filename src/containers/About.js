import React from 'react'
import biopic from '../images/bio-pic-small-cropped.jpg'

const About = () => {
    return (
        <li className="li-about-grid grid">
                <h2>About</h2>
                <span className="line"></span>
                <span className="box about-box br-tr-br"></span>
                <p className="about-sub-item">I am web developer, musician, and graduate of Flatiron School's software engineering program. I enjoy building inclusive systems, and filling my apartment with plants</p>
                <span className="vert-line-box"><span></span></span>
                <img alt="" className="biopic" src={biopic}/>
        </li>
    )
}
export default About