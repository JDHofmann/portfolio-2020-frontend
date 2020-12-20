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
                        <main id="main" className="main content">
                        <h2>Projects</h2>
                        <div className="tom">

                        <NavLink
                            to="/tombardier"
                        >
                            <h3>Tombardier</h3>
                            <p>Web portfolio building made simple</p>
                        </NavLink>
                        </div>
                        </main> 
                    }
                />
            </Switch>

            
        )
    }
}
export default ProjectsContainer