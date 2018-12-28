/* eslint-disable class-methods-use-this */
import React, { PropType } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link, IndexLink } from 'react-router';
import Signup from '../container/signup/Signup';
import Login from '../container/login/Login';
import {connect } from 'react-redux';
import {signupUser} from '../../actions/signup/signupAction';
import {loginUser} from '../../actions/login/loginAction';
import store from '../../store/configureStore';
import { ToastContainer } from "react-toastify";


export class Header extends React.Component {
    constructor(props){
        super(props);
            this.state = {
                loginDisplay: '',
                signupDisplay: ''
            }
    }

    logOut = () =>{
        localStorage.removeItem('user');
        this.props.history.push('/');
    }

    loginModalBtn = () => this.setState({ loginDisplay: 'block', signupDisplay: ''});
    
    signupModalBtn = (e) => {
        e.preventDefault();
        this.setState({ signupDisplay: 'block', loginDisplay: ''})};
  render() {
      const {loginDisplay, signupDisplay} = this.state;
      const{ signup, login, userInfo, history } = this.props;
      const user = store.getState().loginReducer
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
            { user.token ?
            <div className="header-right mr1">
                <div className=" dropDownBtn  hide-md-show-sm">
                        <button className="btn-header ">
                                <div className="header-profile user-letter">E</div>
                            </button>
                            <button className="btn-header header-profile-text black-text user">{user.username}</button>
                            <button className="btn-header header-profile-text black-text "><i className=" dropdown_icon fa fa-sort-desc"></i></button>
                </div>
                <div className=" show-md-hide-sm">
                    <button className="btn-header">
                        <div className="header-profile user-letter">E</div>
                    </button>
                    <button className="btn-header header-profile-text black-text user">{user.username}</button>
                    <button className="btn-header ml1 show-md-hide-sm" onClick={this.logOut} id="logoutModalBtn" >Logout</button>
                    
                    
                </div>
            </div> :
            <div className="header-right mr1">
            <button className="btn-header" id="loginModalBtn" onClick={this.loginModalBtn}>Login</button>
            <button className="btn-header" id="signupModalBtn" onClick={this.signupModalBtn}> Sign Up</button>
            
        </div>
            }
            

        </div>
        <div className="header-banner">

        </div>
        <ToastContainer autoClose={2000} />
        <Login loginDisplay={loginDisplay} login={login} loginInfo={userInfo} history={history} />
        <Signup signupDisplay={signupDisplay} signup={signup} signupInfo={userInfo} history={history} />
    </header>
    );
  }
}

const mapStateToProps = state =>{

    console.log(state)
    return {
        userInfo: state.loginReducer
    }
    }
    const mapDispatchToProps = {
        signup: (userData) => signupUser(userData),
        login: (userData) => loginUser(userData)
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Header);
