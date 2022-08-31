import React from 'react';
import ToDo from './ToDoApp'
import './App.css';
import {

  Route,
  Routes,
  Link,
  useLocation
} from "react-router-dom";

// const { app } = window.require('electron').remote;



const App = () => {

  const { pathname = "/" } = useLocation();

  return (
    <div className="App">


      <div class="item1"><div className="App-header">
        <h2>React + Electron</h2>

        <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
        <Link to="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About us</Link>
        <Link to="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Contact us</Link>
      </div>
      </div>

      <div class="container">

        <div class="side-bar">
          <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</Link>
          <Link to="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About us</Link>
          <Link to="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Contact us</Link>
        </div>
        <div class="main">
          <Routes>
            <Route path="/" element={<ToDo />} />
            <Route path="/about" element={<h1>About us</h1>} />
            <Route path="/contact" element={<h1>Contact us</h1>} />
          </Routes>
        </div>

      </div>
      <div class="footer">Footer</div>

    </div>

  );
}

export default App;
