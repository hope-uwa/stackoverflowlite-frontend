/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Root from './Root';

import Home from './container/home/Home';
import QuestionPage from './container/QuestionPage';
import PostQuestion from './container/question/PostQuestion';
import SingleQuestion from './container/single-question/singleQuestion';
import Signup from './container/signup/Signup';

import css from './css/style.css';

class App extends React.Component {
  render() {
    return (
        <Router>
                <Root>
                    <Route exact path={"/"} component={Home} /> 
                    <Route path={"/create"} component={PostQuestion} /> 
                    <Route path={"/:id"} component={SingleQuestion} />   
                    <Route path={"/question"} component={QuestionPage} /> 
                    <Route path={"/home"} component={Home} />
                </Root>
        </Router>
    );
  }
}


export default App;