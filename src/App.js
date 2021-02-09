import './styles/app.css';
import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './containers/Header';
import Project from './containers/Project';
import Projects from './containers/Projects';
import { projects } from './store.js'
// import About from './containers/About'
import Links from './containers/Links';
import Articles from './containers/Articles';


class App extends React.Component{

  links = [
    {linkUrl: "https://github.com/JDHofmann",
    linkText: "Github"},
    {linkUrl: "https://dev.to/jdbrewerhofmann",
    linkText: "Blog"},
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
                      <Project project={projects[0]}/>
                    }
                />
                <Route 
                    path="/bestbey"
                    render={ () => 
                      <Project project={projects[1]}/>
                    }
                />
                <Route 
                  path="/starwars"
                  render={ () => 
                    <Project project={projects[2]}/>
                  }
                />
                <Route 
                    path="/"
                    render={ () => 
                        <>
                        <Header />
                        <Projects />
                        <Links links={this.links}/>
                        <Articles />
                        {/* <About /> */}
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
