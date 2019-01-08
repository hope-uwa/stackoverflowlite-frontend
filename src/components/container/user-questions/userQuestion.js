/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loadUserQuestions } from '../../../actions/allQuestions/allQuestionAction';
import AllQuestion from '../../presentation/allquestions/AllQuestions';
import Banner from '../banner/Banner';

export class UserQuestion extends React.Component {
  componentDidMount =() => {
    this.props.loadQuestion();
  }

  viewQuestion = (questionId) => {
    const {
      history
    } = this.props;
    history.push(`/questions/${questionId}`);
  }

  render() {
    const { allQuestion, user } = this.props;

    const display = user.token ? <div>
      <Banner title={'Your Questions'}/>
      <div className=" allquestion row pl2 pls1">
        {allQuestion.map((x, key) => <AllQuestion questions={x} key={key} view={this.viewQuestion} />)}

      </div>
      <div className="pagination">
      </div>
    </div> : <Redirect to="/" />;

    return display;
  }
}

UserQuestion.propTypes = {
  loadQuestion: PropTypes.func,
  allQuestion: PropTypes.array,
  user: PropTypes.object,
  history: PropTypes.object,
};

export const mapStateToProps = (state) => {
  return {
    allQuestion: state.userQuestionReducer.questions,
    user: state.loginReducer
  };
};

export const mapDispatchToProps = {
  loadQuestion: () => loadUserQuestions()
};

export default connect(mapStateToProps, mapDispatchToProps)(UserQuestion);
