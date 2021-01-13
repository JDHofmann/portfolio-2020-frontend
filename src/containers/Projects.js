import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../store.js'

const Projects = () => {


    const renderSpan = (pj) => {
        let i = projects.indexOf(pj);
        if( i === projects.length -1) return
        
        else if(i === projects.length-2){
            return <span className="box box-item-end br-br"></span>
        } else {
            return <span className={`box box-${i}`}></span>
        }
    }

    const renderProjectLinks = () => {
        return projects.map( pj =>  
            <>
            <NavLink
                key={pj.title}
                to={pj.path}
                className={`sub-item row-${projects.indexOf(pj)}`}
            ><h3>{pj.title}</h3>
            </NavLink>
            {renderSpan(pj)}
            </>
        )
    }

    return (
            <li>
                <div className="li-project-grid grid">
                    <h2>Featured Projects</h2>
                    <span className="line"></span>
                    <span className="box bt-light br-tr"></span>
                    {renderProjectLinks()}
                </div>
            </li>
    )
}

export default Projects