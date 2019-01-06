import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginDisplay: ''
    };
  }


  componentWillReceiveProps =(props) => {
    const { loginDisplay } = props;
    this.setState({ loginDisplay });
  }

  closeModal = () => {
    this.setState({
      email: '',
      password: '',
      loginDisplay: 'none'
    });
  }

  checkBoxChecked() {
    return true;
  }

  loginSubmit = async (event) => {
    event.preventDefault();
    const userData = { ...this.state };
    event.persist();
    event.target.innerHTML = 'LOADING......';
    await this.props.login(userData);
    if (this.props.loginInfo.token) {
      setTimeout(() => this.setState({ loginDisplay: 'none' }), 1500);
    } else {
      event.target.innerHTML = 'LOGIN';
    }
  }

  handleChange= (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const display = this.state.loginDisplay;
    const style = {
      display,
    };
    return (
      <div id="loginModal" className="modal" style={style}>
        <div className="modal-content">
          <div className="modal-head w100">
            <span className="pl1 modal-title ">Welcome Back!</span>
            <span id="s-close" onClick={this.closeModal} className="close">&times;</span>
          </div>

          <div className="modal__signup-form row">
            <form id="login-form" className="w100 mt2 mb2" >
              <div className="modal-form align-center mb2">
                <input type="email" required placeholder="Enter Email Address" id="loginEmail"
                  className="email" name="email" onChange={this.handleChange} />
                <input type="password" required placeholder="Enter Password" id="loginPassword"
                  className="email" name="password" onChange={this.handleChange} />
              </div>
              <div className="modal-footer  w-100 pt2 pb1">
                <button id="submit" type="submit"onClick={this.loginSubmit}
                  className="btn btn-shadow btn_login-signup w60">LOGIN</button>
              </div>
            </form>
          </div>
        </div>

      </div>

    );
  }
}
Login.propTypes = {
  loginDisplay: PropTypes.string,
  loginInfo: PropTypes.object,
  login: PropTypes.func
};
