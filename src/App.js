import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Skills from './components/Skills'
import CV from './components/CV'
import Separation from './components/Separation';


function App() {
  return (
    <div className="App">

      <AboutMe />
      <Separation />
      <CV />
      <Separation />
      <Skills />
      <Separation />
      <Projects />

    </div>
  );
}

export default App;
