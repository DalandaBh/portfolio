import React from 'react';
import './../css/main.css';

function Navbar(){
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark text">
        <a className="navbar-brand" href="/">Adjini</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon icon" id="icoN"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
                <li className="nav-item active">
                    <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skill">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
    )
}

export default Navbar;