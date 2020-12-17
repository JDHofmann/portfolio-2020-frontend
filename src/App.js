import './App.css';
import React from 'react'
import Header from './containers/Header';
import ProjectsContainer from './containers/ProjectsContainer';
import About from './containers/About'
import Footer from './containers/Footer';

class App extends React.Component{

  render(){

    return (
      <>
        <Header />
        <ProjectsContainer />
        <span className="section-divider"></span>
        <About />
        <Footer />
      </>
    )
  }
}

export default App;
