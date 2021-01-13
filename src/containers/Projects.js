import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../store.js'

const Projects = () => {

    const renderProjectLinks = () => {
        return (
            // projectLinks.map()
            console.log(projects)
        )
    }

    return (
            <li>
                <div className="li-project-grid grid">
                    <h2>Featured Projects</h2>
                    <span className="line"></span>
                    <span className="box bt-light br-tr"></span>
                    {renderProjectLinks()}
                    {/* <NavLink
                        to="/tombardier"
                        className="sub-item pj"
                    ><h3>Tombardier</h3>
                    </NavLink> */}
                    <span className="box box-item-1-2"></span>
                    {/* <NavLink 
                        to="/bestbey"
                        className="sub-item sub-item-2 pj"
                    ><h3>Bestbey</h3>
                    </NavLink> */}
                    <span className="box box-item-end br-br"></span>
                    {/* <NavLink 
                        to="/starwars"
                        className="sub-item sub-item-3 pj"
                    ><h3>Star Wars Quiz</h3>
                    </NavLink> */}
                </div>
            </li>
    )
}

export default Projects