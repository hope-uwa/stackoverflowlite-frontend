/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  loadSingleQuestion
} from '../../../actions/single-question/singleQuestion';
import Answer from '../../presentation/viewanswers/answers';
import PreferredAnswer from '../../presentation/preferred/PreferredAnswer';
import store from '../../../store/configureStore';
import { correctAnswer } from '../../../actions/correct-answer/correctAnswer';
import PostAnswer from '../../presentation/postanswer/postAnswer';
import { postAnswerAction } from '../../../actions/post-answer/postAnswer';
import { deleteQuestionAction } from '../../../actions/delete-question/deleteQuestion';

export class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  componentDidMount = () => {
    const { id } = this.props;
    this.props.getSingleQuestion(id);
  }

  componentWillReceiveProps(nextProps) {
    const { id } = this.props;
    if (JSON.stringify(this.props.postedAnswer) !== JSON.stringify(nextProps.postedAnswer)) {
      this.props.getSingleQuestion(id);
    }
  }

  makePreferred = (qid, aid) => {
    this.props.chooseAnswer(qid, aid);
  }

  deleteAction = async () => {
    const { id, deletePost, history } = this.props;
    try {
      await deletePost(id);
      setTimeout(() => history.push('/'), 1000);
    } catch (error) {
      /* do nothing */
    }
  }

  render() {
    const user = store.getState().loginReducer;
    const {
      question, id, answers, preferred, postAnswer
    } = this.props;
    let auth = false;
    if (user.username === question.username) {
      auth = true;
    }
    // console.log(auth);
    return (
      <div>
        <div className="row align-left question-board pl2 pb1 mb1 pls1 single-question">
          <div className="col9">
            <div className="question-head mb1">
              <h1> {question.title}</h1>
              <span className="ml2">{question.dateCreated}</span>&nbsp;by &nbsp;<span>{question.username}</span>
            </div>
          </div>
          <div className="col3 pt2 pb1">
            {auth && <span className="tooltip"><span className="tooltiptext">
              <ul className="question-actions">
                <li>Delete</li>

              </ul>
            </span><i onClick={this.deleteAction} className="question-droptip ml1 msl1 fa fa-trash-o"></i></span>}

          </div>
          <div className="question-body">
            {question.body}
          </div>
        </div>
        <PreferredAnswer answer={preferred} />
        <div className="row  mls0 pb3 answers-board">
          {Array.isArray(answers)
            ? answers.map((x, key) => <Answer answers={x} key={key} correct ={this.makePreferred} qid={id} auth={auth} />)
            : preferred ? '' : <h3>No answer has been provided yet</h3>}
        </div>
        {user.token ? <PostAnswer post={postAnswer} id={id}/> : <p className="align-center blckgrey-text">You have to login to add an answer</p>}
      </div>

    );
  }
}

SingleQuestion.propTypes = {
  history: PropTypes.object,
  id: PropTypes.string,
  //   question: PropTypes.array,
  //   answers: PropTypes.array,
  preferred: PropTypes.array,
  getSingleQuestion: PropTypes.func,
  chooseAnswer: PropTypes.func,
  postAnswer: PropTypes.func,
  deletePost: PropTypes.func,
  postedAnswer: PropTypes.array

};
export const mapStateToProps = (state, myOwnProps) => {
  return {
    id: myOwnProps.match.params.id,
    question: state.singleQuestion.question,
    answers: state.singleQuestion.answer,
    preferred: state.singleQuestion.preferredAnswer,
    postedAnswer: state.postAnswerReducer.answer

  };
};
export const mapDispatchToProps = {
  getSingleQuestion: x => loadSingleQuestion(x),
  chooseAnswer: (qid, aid) => correctAnswer(qid, aid),
  postAnswer: (qid, answer) => postAnswerAction(qid, answer),
  deletePost: qid => deleteQuestionAction(qid),
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);
