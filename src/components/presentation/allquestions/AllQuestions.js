import React from 'react';

const AllQuestions = (props, key) => {
  const { questions } = props;
  return (
        <div className="questions-card" key={key}>
            <div className="question__avatar">
                <span className="answered question__avatar-img">{questions.user_name.charAt(0)}</span>
            </div>
            <div className="question__content">
                <h4 className="question__content-title "><a className="link-nostyle blckgrey-text" href="question.html">{questions.question_title}</a></h4>
                <div className="question__content-description">
                    <span>7 days ago by </span>
                    <span className="mr2"><a className="green-text" href="">{questions.user_name}</a></span><span className="hide-md-show-sm answer-given"><i className="fa fa-comments-o"></i> &nbsp; 5</span>
                </div>
                <div className="question__content-body">
                    <span>{questions.question_body.substring(0, 150)}</span>
                </div>
            </div>
            <div className="question__response">
                
                <span className="show-md-hide-sm"><i className="fa fa-comments-o"></i> &nbsp; 5</span>
            </div>
        </div>
  );
};
export default AllQuestions;