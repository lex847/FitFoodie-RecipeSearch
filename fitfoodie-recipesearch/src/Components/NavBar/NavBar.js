import React, { Component } from 'react';
import logo from './NavImages/recipes.png';
import './NavBar.css';

class NavBar extends Component {
    render(){
        return(
            <div className="NavBar-Container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"
                        href="/">
                            <img
                                src={logo}
                                className="navbar-logo"
                                alt="fit foodie logo" /> Fit Foodie
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarColor03"
                        aria-controls="navbarColor03"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/favorites"><i className="far fa-heart heart-navbar"></i> Favorites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/faq">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.edamam.com/" target="#">About the API</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;
