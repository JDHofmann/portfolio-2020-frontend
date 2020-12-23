import React from 'react'
import biopic from '../images/bio-pic-small-cropped.jpg'

const About = () => {
    return (
        <li className="li-about-grid grid">
                <h2>About</h2>
                <span className="line"></span>
                <span className="box about-box br-tr-br"></span>
                <p className="about-sub-item">JD is a web developer, musician, and graduate of Flatiron School's software engineering program</p>
                <img className="biopic" src={biopic}/>
        </li>
    )
}
export default About