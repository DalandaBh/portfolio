import React from 'react';
// import logo from './logo.svg';
import './../node_modules/bootstrap/js/dist/scrollspy';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/main.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Navbar from './component/navbar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Navbar/>
    </>
  );
}

export default App;
