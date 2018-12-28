/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';


class PostQuestion extends Component {
  render() {
    return (
        <div>
            <div className="bg-cream row pt1 align-left pl2 pb1 pls1">
                <div className="col9">
                <h1 id="thread-title" className="">All Threads</h1>
                </div>
                <div className="col3">
                    <div className="row pt1 pb1 ">
                            <button id="askQuestion" className="btn btn-success btn-md btn-shadow">
                                    Ask a Question
                                </button>
                    </div>
                        
                </div>
            </div>
            <div className="question-box row pl2 pr2 mt2 mb2">
                <form id="question-form">
                    <h3>Give it a Title:</h3>
                    <input type="text" className="w100" name="title" id="title"/>
                    <h3>Question:</h3>
                    <textarea name="" className="w100" id="body" cols="30" rows="10" style={{ overflowY: 'scroll' }}></textarea>
                    <div className="align-right mt1 mb1">
                        <button id="cancel-question" className="btn btn-danger btn-lg btn-shadow">Cancel</button>
                        <button type="submit" id="submitQuestion" className="btn btn-success btn-lg btn-shadow">Publish</button>
                    </div>
                </form>
            </div>
        </div>
            
    );
  }
} 
export default PostQuestion;