/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import Banner from '../banner/Banner';
import {connect} from 'react-redux';
import { postQuestion } from '../../../actions/allQuestions/allQuestionAction';


class PostQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }
  handleInputChanges = (e) => {
      this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = async(e)=>{
    console.log(this.props)
      e.preventDefault();
      const {createQuestion, history, success}= this.props
      try {
        const response = await createQuestion({ ...this.state });
        if (this.props.success) {
          return setTimeout(() => history.push('/', { prev: 'create' }), 1000);
        }
      } catch (error) {
        /* do nothing */
      }

  }

  render() {
    return (
        <div>
            <Banner title={'Question Pad'} display={'none'}/>
            <div className="question-box aligned-center row ml1 mr1 mt2 mb2">
                <form id="question-form" className="question-form mt1">
                    <h3>Give it a Title:</h3>
                    <input type="text" onChange={this.handleInputChanges} className="w100" name="title" id="title"/>
                    <h3>Question:</h3>
                    <textarea name="body" onChange={this.handleInputChanges} className="w100" id="body" cols="30" rows="10" style={{ overflowY: 'scroll' }}></textarea>
                    <div className="align-right mt1 mb1">
                        <button type="submit" onClick={this.handleSubmit} id="submitQuestion" className="btn btn-success btn-lg btn-shadow">Publish</button>
                    </div>
                </form>
            </div>
        </div>
            
    );
  }
} 

const mapStateToProps =(state)=>{

    console.log(state.createQuestionReducer.status)
    return{
     success :state.createQuestionReducer.status
    }
}

const mapDispatchToProps ={
    createQuestion : (x)=> postQuestion(x)
}
export default connect(mapStateToProps, mapDispatchToProps)(PostQuestion)