import './App.css';
import React from 'react'
import Header from './containers/Header';
import ProjectsContainer from './containers/ProjectsContainer';
import About from './containers/About'
import Footer from './containers/Footer';
import Links from './containers/Links';

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
          <ProjectsContainer />
          <Links links={this.links}/>
          <About />
          {/* <Footer /> */}
        </ul>
      </main>
    )
  }
}

export default App;
