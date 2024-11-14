import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer>
        <p>© 2024 Sanika Wagle. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;