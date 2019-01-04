import React from 'react';
import PropTypes from 'prop-types';

const PreferredAnswer = (props) => {
  const {} = props;
  return (

    <div className="row mls0 pb1 correct-answer">                     
    <div className="answers-card pt2 pb1 most-preferred">
        
        <div className="answer__avatar ">
            <span className="answer__avatar-img">A</span>
            
        </div>

        <div className="answer__content">
            <div className="answer__content-title">
                    
                <span>1 days ago</span> <span>by</span>
                <span className=""><a className="green-text link-nostyle blckgrey-text" href="">Alpha</a></span><span className="ml1 most-preferred-tag">preferred<i className=" ml1 msl1 vote fa fa-check"></i></span>
                
                
            </div>
            <div className="answer__content-body">
                <span>I will help you find today by just taking a peep into the necessities of existence in a 3rd world </span>
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
export default PreferredAnswer;