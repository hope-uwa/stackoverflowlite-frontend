/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as questionAction from '../../actions/questionAction'; 
//  import configureStore from '../../store';

class QuestionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      question: { question_title: " " },
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const { question } = this.state;
    question.question_title = event.target.value;
    this.setState({ question });
  }

  onClickSave() {
    // this.props.dispatch(questionAction.createQuestion(this.state.question));
    //     alert(`Saving ${this.state.question.title}`);
    this.props.actions.createQuestion(this.state.question);
    // debugger;
  }

  questionRow(question, index) {
    return <div key={index}>Question: {question.question_title}</div>;
  }

  render() {
    return (
            <div>
                <h1>This is the Question Page</h1>
                {this.props.questions.map(this.questionRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.question.question_title} />
                <input type="submit" value="Save" onClick={this.onClickSave} />
            </div>
    );
  }
}

QuestionPage.propTypes = {

  questions: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questionReducer,
  };
}

function mapDispatchToProps(dispatch) {
//   return {
//     createQuestion: question => dispatch(questionAction.createQuestion(question)),
//   };
  return {
    actions: bindActionCreators(questionAction, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);
