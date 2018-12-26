import React, { Component } from 'react';
import { ToastContainer } from "react-toastify";



export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state ={
        display: ''
    }
  }

  closeModal = ()=>{   
    this.setState({
        email: '',
      username: '',
      password: '',
        display: 'none'
    })
  }
  componentWillReceiveProps =() =>{
      const {display} =this.props
      this.setState({ display });
      
  }

  signupSubmit = async (event) => {
    event.preventDefault();
    const userData = { ...this.state };
    event.persist()
    event.target.innerHTML= 'LOADING......'
    const action = await this.props.signup(userData);
    event.target.innerHTML= 'SIGN UP'
    if(!this.props.signupInfo.error){
        this.setState({display: 'none'})
    }
  }

  handleChange= (event) => {
      console.log(event.target.value)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    const { display } = this.state;
    const style ={
        display,
    }
    const {signup} = this.props
    return (
            <div id="signUpModal" className="modal" style={style}>
                <div className="modal-content">
                    <div className="modal-head w100">
                        <span className="pl1  modal-title ">Join Our Community!</span>
                        <span id="s-close" onClick={this.closeModal} className="close">&times;</span>
                    </div>
                    <form id="signup-form" className="mt2" onSubmit={this.signupSubmit}>
                        <div className="modal__signup-form row">             
                                <div className="modal-form align-center">                  
                                <input type="text" required placeholder="Enter Your Nickname" id="username" className="" name="username" onChange={this.handleChange}/>
                                <input type="email" required placeholder="Enter Email Address" id="email" className="" name="email" onChange={this.handleChange} />
                                <input type="password" required placeholder="Enter Password" id="password" className="" name="password" onChange={this.handleChange} />                   
                                </div>            
                        </div>          
                        <div className="modal-footer  w-100 pt2 pb2">             
                                <button type="submit" onClick={this.signupSubmit} className="btn btn-shadow btn_login-signup w60">SIGN UP</button>
                        </div>
                    </form>
                </div>
                <ToastContainer autoClose={2000} />
            </div>
    );
  }
}

