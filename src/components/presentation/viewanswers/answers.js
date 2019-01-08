/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Answers = (props, key) => {
  const {
    answers, qid, correct, auth,
  } = props;
  return (
    <div className="answers-card pt1 pb1" key={key}>
      <div className="answer__avatar">
        <span className="answer__avatar-img">{answers.user_name.charAt(0)}</span>

      </div>

      <div className="answer__content">
        <div className="answer__content-title">
          <span>{moment(answers.created_at).fromNow()}</span> <span className="pl1">by</span>&nbsp;&nbsp;
          <span className=""><a className="green-text link-nostyle blckgrey-text" href="">{answers.user_name}</a></span>

        </div>
        <div className="answer__content-body">
          <span>{answers.answer_body}</span>
        </div>
        <div className="align-right mr2">
          {auth && <span onClick={() => correct(qid, answers.id)} className="tooltip">
            <span className="tooltiptext">make preferred</span>
            <i className="ml1 msl1 fa fa-check"></i>
          </span>}
        </div>
      </div>
      <div className="answer__response black-text">

      </div>

    </div>
  );
};

Answers.propTypes = {
  answers: PropTypes.object,
  qid: PropTypes.string,
  correct: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

export default Answers;
