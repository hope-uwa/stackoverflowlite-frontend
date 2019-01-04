import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const Answers = (props) => {
  const { answers } = props;
    console.log('this', props)
  return (
        <div className="answers-card pt1 pb1">
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
                        <span><i className=" ml1 msl1 vote fa fa-thumbs-o-up"></i><sup>20</sup></span>
                        <span><i className=" ml1 msl1 vote fa fa-thumbs-down"></i><sup>50</sup></span>
                        <span><i className="ml1 msl1 fa fa-comment"></i><sup>10</sup></span>
                        <span className="tooltip"><span className="tooltiptext">make preferred</span><i className="ml1 msl1 fa fa-check"></i></span>
                        
                </div>
            </div>
            <div className="answer__response black-text">
        
            </div>
            
        </div>
  );
};

export default Answers;