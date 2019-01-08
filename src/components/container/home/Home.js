/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadAllQuestion } from '../../../actions/allQuestions/allQuestionAction';
import AllQuestion from '../../presentation/allquestions/AllQuestions';
import Banner from '../banner/Banner';

export class Home extends React.Component {
  componentDidMount =() => {
    this.props.loadQuestion();
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
      this.props.loadQuestion();
    }
  }


  viewQuestion = (questionId) => {
    const {
      history
    } = this.props;
    history.push(`/questions/${questionId}`);
  }

  render() {
    const { allQuestion } = this.props;

    return (
      <div>
        <Banner title={'Lastest Questions'}/>
        <div className=" allquestion row pl2 pls1">
          {allQuestion.map((x, key) => <AllQuestion questions={x} key={key} view={this.viewQuestion} />)}

        </div>
        <div className="pagination">
          <a href="#">❮</a>
          <a href="#">❯</a>
        </div>
      </div>

    );
  }
}

Home.propTypes = {
  history: PropTypes.object,
  loadQuestion: PropTypes.func,
  allQuestions: PropTypes.array,
};

export const mapStateToProps = (state) => {
  return {
    allQuestion: state.allQuestionReducer.questions,
    user: state.loginReducer
  };
};

export const mapDispatchToProps = {
  loadQuestion: () => loadAllQuestion()
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
