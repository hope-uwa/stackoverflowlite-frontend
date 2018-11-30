/* eslint-disable class-methods-use-this */
import React, { PropType } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="fixed-header">
        <div className="navbar">
            <div className="header-logo">   
                
                <a href="/">
                    <img className="logo-size" src="../../src/static/logo.png" alt="Logo"/>
                </a>
                
            </div>
            <div className="header-title" >
             <a href="/">   Questack</a>
            </div>
            <div className="search-header">
                    <div className="search-box ">
                            <input type="text" name="search" placeholder="Search.."/>
                    </div> 
            </div>
            <div className="header-right mr1">
                <button className="btn-header" id="loginModalBtn" onclick="loginModalBtn()">Login</button>
                <button className="btn-header" id="signupModalBtn" onclick="signupModalBtn()"> Sign Up</button>
                
            </div>

        </div>
        <div className="header-banner">

        </div>

    </header>
    );
  }
}

export default Header;
