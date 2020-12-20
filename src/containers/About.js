import React from 'react'
import biopic from '../images/bio-pic-small.jpeg'

const About = () => {
    return (
        <div className="content about column-grid">
            <h2>About</h2>
            <img className="bio-pic" src={biopic}/>
            <p>I am a web developer who loves creating things from scratch and bringing them to life. User experience is important to me, so I strive to optimize products’ functionality, while crafting the most meaningful and effective environment possible. I believe that things should not only look beautiful on the outside, but also function beautifully under the hood as well.</p>            

        </div>
    )
}
export default About