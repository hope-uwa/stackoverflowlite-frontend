/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';


class PostQuestion extends Component {

  render() {
    return (
            <div className="question-post" id="questionBanner"> 
                    <div className="container">
                        <div className="row">
                            <div className="question-box pl2 pr2 mt2 mb2 pls1">
                                <h3>Give it a Title:</h3>
                                <input type="text" className="w100" name="title" id=""/>
                                <h3>Question:</h3>
                                <textarea name="" className="w100" id="" cols="30" rows="10" style={ { overflowY: 'scroll' }}></textarea>
                                <div className="align-right mt1 mb1">
                                    <button id="cancel-question" className="btn btn-danger btn-lg btn-shadow">Cancel</button>
                                    <button className="btn btn-success btn-lg btn-shadow">Publish</button>
                                </div>
                            </div>

                        </div>

                    </div>
            </div>
    );
  }
} 
export default PostQuestion;