import React from 'react';
import PropTypes from 'prop-types';

class PostAnswer extends React.Component {
    constructor(props) {
        super(props);
        console.log('props',props)
        this.state = {
          body: '',
        };
      }
      handleInputChanges = (e) => {
          this.setState({ [e.target.name]: e.target.value });
      }
      handleSubmit = async(e)=>{
        console.log('gothere')
          e.preventDefault();
          const {post, id}= this.props
          try {
            const response = await post(id, { ...this.state });
            if (response) {
              return setTimeout(() => history.push(`/${id}`), 1000);
            }
          } catch (error) {
            /* do nothing */
          }
      }
    
  render() {
    return (
        <div className="row m12 mls0 pb3">
            <div className="answers-card pt1 pb1">
                
                <div className=" smhide answer__avatar">      
                </div> 
                <div className="answer__box align-right">
                    <form id="answer-form">
                        <h4 className="align-left">Your Answer</h4>
                        <textarea name="" name="body" onChange={this.handleInputChanges} id="answer" className="answer-text"></textarea>
                        <button id="answerQuestion" onClick={this.handleSubmit} className="btn btn-success btn-sm">Add Answer</button>
                    </form>                                
                </div>
                <div className="answer__response black-text">
    
                </div>
            </div>
        </div>
    );
  }
}
export default PostAnswer;