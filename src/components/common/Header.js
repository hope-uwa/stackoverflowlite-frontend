/* eslint-disable class-methods-use-this */
import React, { PropType } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link, IndexLink } from 'react-router';
import Signup from '../container/signup/Signup';
import {connect } from 'react-redux';
import {signupUser} from '../../actions/signup/signupAction';

export class Header extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                loginDisplay: '',
                signupDisplay: ''
            }
    }

    loginModalBtn = () => this.setState({ loginDisplay: 'block'});
    
    signupModalBtn = (e) => {
        e.preventDefault();
        this.setState({ signupDisplay: 'block'})};
  render() {
      const {loginDisplay, signupDisplay} = this.state;
      const{ signup, signupInfo } = this.props;
     
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
                <button className="btn-header" id="loginModalBtn" onClick={this.loginModalBtn}>Login</button>
                <button className="btn-header" id="signupModalBtn" onClick={this.signupModalBtn}> Sign Up</button>
                
            </div>

        </div>
        <div className="header-banner">

        </div>

        <Signup display={signupDisplay} signup={signup} signupInfo={signupInfo} />
    </header>
    );
  }
}

const mapStateToProps = state =>{

    console.log(state)
    return {
        signupInfo: state.signupReducer,
    }
    }
    const mapDispatchToProps = {
        signup: (userData) => signupUser(userData)
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Header);
