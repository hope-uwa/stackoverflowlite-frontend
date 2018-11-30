import React from 'react';
import QuestionsDisplay from './QuestionsDisplay';

class Home extends React.Component {
  render() {
    return (
            <main>
                {/* <div className="question-post" id="questionBanner"> 
                    <div className="container">
                        <div className="row">
                            <div className="question-box pl2 pr2 mt2 mb2 pls1">
                                <h3>Give it a Title:</h3>
                                <input type="text" className="w100" name="title" id="">
                                <h3>Question:</h3>
                                <textarea name="" className="w100"  id="" cols="30" rows="10" style="overflow-y: scroll"></textarea>
                                <div className="align-right mt1 mb1">
                                    <button id="cancel-question" onclick="cancelQuestion()" className="btn btn-danger btn-lg btn-shadow">Cancel</button>
                                    <button className="btn btn-success btn-lg btn-shadow">Publish</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col9 colsm12  col-order2 ">
                                <div className="row bg-cream align-left pt1 pl2 pb1 pls1 bb-grey">
                                    <div className="col9">
                                            <h1 id="thread-title" className="">Top Questions</h1>
                                    </div>
                                    <div className="col3">
                                        <div className="row pt1 pb1 ">
                                                <button id="askQuestion" onClick="signupModalBtn()" className="btn btn-success btn-md btn-shadow">
                                                    Ask a Question
                                                </button>
                                        </div>
                                            
                                    </div>
                                    
                                </div>
                                <div id="recent" className=" allquestion row pl2 pls1">
                                    <QuestionsDisplay />      
                                
                                </div>
                                <div className="pagination">
                                    <a href="#">❮</a>
                                    <a href="#">❯</a>
                                </div>
                        </div>
                        <div className="col3 colsm12 sidebar col-order1 " >
                            <div className="row mt3 mb2 show-md-hide-sm">
                                
                            </div>
                            <div className="row welcome show-md-hide-sm">
                                
                                
                            </div>
                            <div className="row h-400 h-sm-auto" >
                                    
                                    <ul className="align-center profile__actions">
                                        <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<a href="#">Top Questions</a></li>
                                        <li className="profile__actions-recent"><i className=" dblue-text fa fa-filter"></i>&nbsp;<a href="#">Lastest Questions</a></li>
                                        <li className="profile__actions-threads"><i className=" dblue-text fa fa-comments"></i>&nbsp;<a href="#">All Questions</a></li>
                                        <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<a href="#">Most Answered Questions</a></li>
                                        <li className="profile__actions-recent"><i className=" dblue-text fa fa-filter"></i>&nbsp;<a href="#">Recently Asked Questions</a></li>
                                        <li className="profile__actions-threads"><i className=" dblue-text fa fa-comments"></i>&nbsp;<a href="#">All Questions</a></li>
                                    </ul>
            
                                </div>
                        </div>
                    </div>


                </div>
                
                
            </main>
    );
  }
}

export default Home;