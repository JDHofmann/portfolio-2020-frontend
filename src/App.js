import './styles/app.css';
import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './containers/Header';
import { Tombardier } from './projects/Tombardier'
import { Bestbey } from './projects/Bestbey'
import { StarWars } from './projects/StarWars';
import Links from './containers/Links';
import About from './containers/About'
import Projects from './containers/Projects';



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
                  path="/starwars"
                  render={ () => 
                    <StarWars />
                  }
                />
                <Route 
                    path="/"
                    render={ () => 
                        <>
                        <Header />
                        <Projects />
                        <Links links={this.links}/>
                        <About />
                        </>
                    }
                />
            </Switch>
        </ul>
      </main>
    )
  }
}

export default App;
