import React from 'react'
import Links from '../containers/Links'
import { NavLink } from 'react-router-dom'
// import tom_gif from '../images/Tombardier.gif'

const Project = ({project}) => {

    const grid = {
        gridTemplateRows: `repeat(3, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    return ( 
        <>  
        <li>
            <div 
                style={grid}
                className="grid"
            >
                <h1 className="pj-title">{project.title}</h1>
                <span className="line"></span>
                <span className="path path-0"></span>
                <p 
                    className="sub-item row-0 pad"
                >{project.description}</p>
                <span className="path path-1 path-end"></span>
                <p className="sub-item row-1 pad mg-top">{project.lesson}</p>
            </div>
        </li>
        { project.gif ? 
        <img className="gif" src={process.env.PUBLIC_URL + project.gif}></img>
        : null
         }
        <Links links={project.links}/>
        <NavLink 
            className="home-btn"
            to="/"><h3>Home Page</h3></NavLink>
        </>
    )
}

export default Project