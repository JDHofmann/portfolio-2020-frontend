import React from 'react'
import biopic from '../images/bio-pic-small.jpeg'

const About = () => {
    return (
        <div className="content about column-grid">
            <h2>About</h2>
            <img className="bio-pic" src={biopic}/>
            <p>JD is a web developer, musician, and graduate of Flatiron School's software engineering program'</p>            

        </div>
    )
}
export default About