/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllQuestion } from '../../../actions/allQuestions/allQuestionAction';
import AllQuestion from '../../presentation/allquestions/AllQuestions';
import Banner from '../banner/Banner';

export class AnsweredQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: []
    };
  }

  componentDidMount =() => {
    this.props.loadQuestion();
  }

  componentWillReceiveProps(props) {
    const { allQuestions } = props;
    const answered = allQuestions.filter(x => x.count > 0);
    this.setState({ answered });
  }


  viewQuestion = (questionId) => {
    const {
      history
    } = this.props;
    history.push(`/questions/${questionId}`);
  }

  render() {
    const { answered } = this.state;

    return (
      <div>
        <Banner title={'Answered Questions'}/>
        <div className=" allquestion row pl2 pls1">
          {answered.map((x, key) => <AllQuestion questions={x} key={key} view={this.viewQuestion} />)}

        </div>
        <div className="pagination">
          <a href="#">❮</a>
          <a href="#">❯</a>
        </div>
      </div>

    );
  }
}

AnsweredQuestion.propTypes = {
  history: PropTypes.object,
  loadQuestion: PropTypes.func,
  allQuestions: PropTypes.array,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allQuestions: state.allQuestionReducer.questions,
    user: state.loginReducer
  };
};

const mapDispatchToProps = {
  loadQuestion: () => loadAllQuestion()
};

export default connect(mapStateToProps, mapDispatchToProps)(AnsweredQuestion);
