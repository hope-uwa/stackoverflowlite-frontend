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
  // constructor(props){
  //     super(props);
  //     state={
  //         user:
  //     }
  // }


  // componentWillReceiveProps =(props) =>{
  //     const {loginDisplay} =props
  //     this.setState({ loginDisplay });

  // }


  componentDidMount =() => {
    this.props.loadQuestion();
  }

  //   componentWillReceiveProps(nextProps) {
  //     if (JSON.stringify(this.props.user) !== JSON.stringify(nextProps.user)) {
  //       this.props.loadUserQuestions();
  //     }
  //   }


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
        <a href="#">❮</a>
        <a href="#">❯</a>
      </div>
    </div> : <Redirect to="/" />;

    return display;
  }
}

UserQuestion.propTypes = {
  history: PropTypes.object,
  loadQuestion: PropTypes.func,
  allQuestion: PropTypes.array,
  user: PropTypes.object

};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allQuestion: state.userQuestionReducer.questions,
    user: state.loginReducer
  };
};

const mapDispatchToProps = {
  loadQuestion: () => loadUserQuestions()
};

export default connect(mapStateToProps, mapDispatchToProps)(UserQuestion);
