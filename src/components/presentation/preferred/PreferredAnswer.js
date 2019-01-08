/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PreferredAnswer = (props) => {
  const { answer } = props;
  if (answer.length) {
    return (
      <div className="row mls0 correct-answer">
        <div className="answers-card pt2 pb1 most-preferred">
          <div className="answer__avatar ">
            <span className="answer__avatar-img">{answer[0].user_name.charAt(0)}</span>
          </div>
          <div className="answer__content">
            <div className="answer__content-title">
              <span>{moment(answer[0].created_at).fromNow()}</span> <span>by</span>
              <span className=""><a className="green-text link-nostyle blckgrey-text" href="">{answer[0].user_name}</a></span>
              <span className="ml1 most-preferred-tag">preferred<i className=" ml1 msl1 vote fa fa-check"></i></span>
            </div>
            <div className="answer__content-body">
              <span>
                {answer[0].answer_body}
              </span>
            </div>
            <div className="align-right mr2">
            </div>
          </div>
          <div className="answer__response black-text">

          </div>
        </div>
      </div>

    );
  }
  return <div></div>;
};
PreferredAnswer.propTypes = {
  answer: PropTypes.array,
};
export default PreferredAnswer;
