/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { browserHistory } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Root from './Root';

import Home from './container/Home';
import QuestionPage from './container/QuestionPage';

import css from './css/style.css';

class App extends React.Component {
  render() {
    return (
        <Router>
                <Root>
                    <Route exact path={"/"} component={Home} />    
                    <Route path={"/question"} component={QuestionPage} />    
                    <Route path={"/home"} component={Home} />
                </Root>
        </Router>
    );
  }
}


export default App;