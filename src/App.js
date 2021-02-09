import './styles/app.css';
import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router'
import Header from './containers/Header';
import Project from './containers/Project';
import Projects from './containers/Projects';
import { projects } from './store.js'
import Links from './containers/Links';
import Articles from './containers/Articles';


export default function App()
{

  const links = [
    {linkUrl: "https://github.com/JDHofmann",
    linkText: "Github"},
    {linkUrl: "https://dev.to/jdbrewerhofmann",
    linkText: "Blog"},
    {linkUrl: "mailto:jdbrewerhofmann@gmail.com",
    linkText: "jdbrewerhofmann@gmail.com"}
  ]

  const [articles, setArticles] = useState(null)

  useEffect( async () => {
      const result = await fetch(`https://dev.to/api/articles?username=jdbrewerhofmann`)
      const data = await result.json()
      setArticles(data)
  }, [])

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
                      <Links links={links}/>
                      <Articles articles={articles}/>
                      </>
                  }
              />
          </Switch>
      </ul>
    </main>
  )
}


