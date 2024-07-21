import React from 'react';
import Projects from './Projects/Projects';
import './App.css';

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <h1>Luan Hietbrink</h1>
          </header>
          <Projects />
          <footer>
                <p>Check out more on <a href="https://github.com/LuanHietbrink" target="_blank" rel="noopener noreferrer">my GitHub profile</a>.</p>
        </footer>
      </div>
  );
}

export default App;
