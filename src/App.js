import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router'
import { NavLink } from 'react-router-dom'
import Header from './containers/Header';
import { Tombardier } from './projects/Tombardier'
import { Bestbey } from './projects/Bestbey'
import Links from './containers/Links';
import About from './containers/About'
import Footer from './containers/Footer';



class App extends React.Component{

  links = [
    {linkUrl: "https://github.com/JDHofmann",
    linkText: "Github"},
    {linkUrl: "https://jdbrewerhofmann.medium.com",
    linkText: "Medium"},
    {linkUrl: "mailto:jdbrewerhofmann@gmail.com",
    linkText: "jdbrewerhofmann@gmail.com"}
]

  render(){

    return (
      <main>
        <ul className="content">
          <Header />
          <Switch>
                <Route 
                    path="/tombardier"
                    render={ () => 
                        <Tombardier />
                    }
                />
                <Route 
                    path="/bestbey"
                    render={ () => 
                        <Bestbey />
                    }
                />
                <Route 
                    path="/"
                    render={ () => 
                        <>
                        <li>
                            <div className="li-project-grid grid">
                                <h2>Projects</h2>
                                <span className="line"></span>
                                <span className="box bt-light br-tr"></span>
                                <NavLink
                                    to="/tombardier"
                                    className="sub-item pj"
                                ><h3>Tombardier</h3>
                                </NavLink>
                                <span className="box box-item-1-2"></span>
                                <NavLink 
                                    to="/bestbey"
                                    className="sub-item sub-item-2 pj"
                                ><h3>Bestbey</h3>
                                </NavLink>
                                <span className="box box-item-end br-br"></span>
                                <NavLink 
                                    to="/park-planner"
                                    className="sub-item sub-item-3 pj"
                                ><h3>Park Planner</h3>
                                </NavLink>
                            </div>
                        </li>
                        <Links links={this.links}/>
                        <About />

                        </>
                    }
                />
            </Switch>
          {/* <Footer /> */}
        </ul>
      </main>
    )
  }
}

export default App;
