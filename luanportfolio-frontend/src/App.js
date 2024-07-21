import React from 'react';
import Projects from './Projects/Projects';
import ScrollTrack from './TrackInfo/Track';
import './App.css';

function App() {
  return (
      <div className="App">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
          <header className="App-header">
          <div class="name">Luan Hietbrink</div>
        <div class="social-links">
            <a href="https://za.linkedin.com/in/luan-hietbrink-8a6a212aa" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/LuanHietbrink" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="luanportfolio-frontend\src\cv\LuanHietbrinkCV.pdf" download="LuanCV" target="_blank" aria-label="CV"><i class="fa fa-download" aria-hidden="true"></i>
            </a>
        </div>
              
          </header>
          {/* <ScrollTrack /> */}
          <Projects />
          
      </div>
  );
}

export default App;