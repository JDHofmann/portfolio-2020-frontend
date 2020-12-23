import './App.css';
import React from 'react'
import Header from './containers/Header';
import ProjectsContainer from './containers/ProjectsContainer';
import About from './containers/About'
import Footer from './containers/Footer';

class App extends React.Component{

  render(){

    return (
      <main>
        <ul className="content">
          <Header />
          <ProjectsContainer />
          {/* <About /> */}
          {/* <Footer /> */}
        </ul>
      </main>
    )
  }
}

export default App;
