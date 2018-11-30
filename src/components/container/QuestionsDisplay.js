/* eslint-disable react/jsx-key */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class QuestionDisplay extends Component {
  constructor() {
    super();
    this.state = { questions: null };
    this.getQuestions();
  }

  getQuestions() {
    const questions = fetch('https://cors-anywhere.herokuapp.com/https://uwaelpis.herokuapp.com/api/v1/questions').then((res) => {
      res.json().then((res2) => {
        // console.log(res2.message);
        // res2.message.map((item) => {
        //  console.log(item);
        // });
        this.setState({ questions: res2.message });
      });
    });
  }

  render() {
    return (
      this.state.questions
        ? this.state.questions.map(item => <div className="questions-card" key={item.id}>
            <div className="question__avatar">
                <span className="answered question__avatar-img">{item.user_name.charAt(0)}</span>
            </div>
            <div className="question__content">
                <h4 className="question__content-title "><a className="link-nostyle blckgrey-text" href="question.html">{item.question_title}</a></h4>
                <div className="question__content-description">
                    <span>7 days ago by </span>
                    <span className="mr2"><a className="green-text" href="">{item.user_name}</a></span><span className="hide-md-show-sm answer-given"><i className="fa fa-comments-o"></i> &nbsp; 5</span>
                </div>
                <div className="question__content-body">
                    <span>{item.question_body.substring(0, 150)}</span>
                </div>
            </div>
            <div className="question__response">
                
                <span className="show-md-hide-sm"><i className="fa fa-comments-o"></i> &nbsp; 5</span>
            </div>
        </div>)
        : <h1>Wait... question is fetching</h1>
    );
  }
}

export default QuestionDisplay;
