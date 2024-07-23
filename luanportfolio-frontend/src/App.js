import React from 'react';
import Projects from './Projects/Projects';
import './App.css';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
      <div className="App">
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
          <header className="App-header">
            <div class="name">Luan Hietbrink</div>
            <div class="social-links">
                <a href="https://za.linkedin.com/in/luan-hietbrink-8a6a212aa" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/LuanHietbrink" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="luanportfolio-frontend\src\cv\LuanHietbrinkCV.pdf" download="LuanCV.pdf" target="_blank" aria-label="CV"><i class="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
          </header>
          <AboutMe />
          <Projects />
          <footer>Email me at <a href='https://luan.hietbrink@gmail.com'>luan.hietbrink@gmail.com</a></footer>
      </div>
  );
}

export default App;
