import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../store.js'

const Projects = () => {

    const gridLength = projects.length + 1

    const grid = {
        gridTemplateRows: `repeat(${gridLength}, minmax(35px, 5vh) minmax(35px, auto) )`
    }

    const renderSpan = (pj) => {
        let i = projects.indexOf(pj);
        if( i === projects.length - 1){
            return <span className={`path path-end path-${i} br-br`}></span>
        } else {
            return <span className={`path path-${i}`}></span>
        }
    }

    const renderProjectLinks = () => {
        return projects.map( pj => 
            <>
            {renderSpan(pj)}
            <NavLink
                key={pj.title}
                to={pj.path}
                className={`sub-item row-${projects.indexOf(pj)}`}
                aria-label={pj.title}
            >
                {/* <h3> */}
                    {pj.title}
                {/* </h3> */}
            </NavLink>
            </>
        )
    }

    return (
        <li>
            <div 
                style={grid}
                className="grid">
                <h2>Featured Projects</h2>
                <span className="line"></span>
                {renderProjectLinks()}
            </div>
        </li>
    )
}

export default Projects