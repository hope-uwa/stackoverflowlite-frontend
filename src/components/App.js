/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Root from './Root';
import HomePage from './container/home/Home';
import QuestionPage from './container/QuestionPage';
import QuestionPostPage from './container/question/PostQuestion';
import Single from './container/single-question/singleQuestion';
import UserQuestions from './container/user-questions/userQuestion';
import Answered from './container/answered-question/answeredQuestion';
import Unanswered from './container/unanswered-question/unanswerQuestion';

import css from './css/style.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Root>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/questions'} component={QuestionPage} />
          <Route path={'/questions/:id'} component={Single} />
          <Route path={'/create'} component={QuestionPostPage} />
          <Route path={'/user'} component={UserQuestions} />
          <Route path={'/answered'} component={Answered} />
          <Route path={'/unanswered'} component={Unanswered} />

          <Route path={'/home'} component={HomePage} />
        </Root>
      </Router>
    );
  }
}


export default App;
