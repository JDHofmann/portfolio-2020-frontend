import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Tombardier } from '../projects/Tombardier'

class ProjectsContainer extends React.Component{


    render(){
        return(

            <Switch>
                <Route 
                    path="/tombardier"
                    render={ () => 
                        <Tombardier />
                    }
                />
                <Route 
                    path="/"
                    render={ () => 
                        <li>
                            <div class="li-project-grid grid">
                                <h2>Projects</h2>
                                <span class="line"></span>
                                <span class="box bt-light br-tr"></span>
                                <a href="project.html" class="sub-item pj"><h3>Tombardier</h3></a>
                                <span class="box box-item-1-2"></span>
                                <a class="sub-item sub-item-2 pj"><h3>Bestbey</h3></a>
                                <span class="box box-item-end br-br"></span>
                                <a class="sub-item sub-item-3 pj"><h3>Parks</h3></a>
                            </div>
            </li>
                    }
                />
            </Switch>

            
        )
    }
}
export default ProjectsContainer