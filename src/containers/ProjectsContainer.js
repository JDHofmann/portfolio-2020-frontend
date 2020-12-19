import React from 'react'
import { Switch, Route } from 'react-router'
import {projects} from '../projects.js'

class ProjectsContainer extends React.Component{

    renderProjectLinks = () => {
        return projects.map( p => 
        <div key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.subtitle}</p>
            <img alt="" src={p.images[0]} />
        </div>)
    }

    render(){
        console.log(projects)
        return(

            <Switch>
                {/* <Route 
                    path="*"
                    render={() => <div>Something else</div>}
                /> */}
                <Route 
                    path="/"
                    render={() => 
                        <main id="main" className="main content">
                            <h2>Projects</h2>
                            { this.renderProjectLinks() }
                        </main>
                    }
                />

            </Switch>

            
        )
    }
}
export default ProjectsContainer