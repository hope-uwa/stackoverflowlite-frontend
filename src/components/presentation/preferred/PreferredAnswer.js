import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const PreferredAnswer = (props) => {
  const { answer } = props;
  return (

    <div className="row mls0 correct-answer">                     
    <div className="answers-card pt2 pb1 most-preferred">
        
        <div className="answer__avatar ">
            <span className="answer__avatar-img">{answer.user_name.charAt(0)}</span>
            
        </div>

        <div className="answer__content">
            <div className="answer__content-title">
                    
                <span>{moment(answer.created_at).fromNow()}</span> <span>by</span>
                <span className=""><a className="green-text link-nostyle blckgrey-text" href="">{answer.user_name}</a></span><span className="ml1 most-preferred-tag">preferred<i className=" ml1 msl1 vote fa fa-check"></i></span>
                
                
            </div>
            <div className="answer__content-body">
                <span>
                    {answer.answer_body}
                    </span>
            </div>
            <div className="align-right mr2">
                    <span><i className=" ml1 msl1 vote fa fa-thumbs-o-up"></i><sup>20</sup></span>
                    <span><i className=" ml1 msl1 vote fa fa-thumbs-down"></i><sup>50</sup></span>
                    <span><i className="ml1 fa fa-comment"></i><sup>10</sup></span>

            </div>
            
        </div>
        <div className="answer__response black-text">
            
            
        </div>
    </div>
   </div>
   
        
  );
};
PreferredAnswer.propTypes = {
  answer: PropTypes.object.isRequired,
};
export default PreferredAnswer;