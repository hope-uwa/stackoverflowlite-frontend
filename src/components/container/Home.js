/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
import QuestionsDisplay from './QuestionsDisplay';
import store from '../../store/configureStore';
import PostQuestion from './question/PostQuestion';

class Home extends React.Component {
  // constructor(props){
  //     super(props);
  //     state={
  //         user: 
  //     }
  // }


  // componentWillReceiveProps =(props) =>{
  //     const {loginDisplay} =props
  //     this.setState({ loginDisplay });
        
  // }
  render() {
    const user = store.getState().loginReducer;
    return (
            <main>
                <PostQuestion/>
                <div className="container">
                    <div className="row">
                        <div className="col9 colsm12  col-order2 ">
                                <div className="row bg-cream align-left pt1 pl2 pb1 pls1 bb-grey">
                                    <div className="col9">
                                            <h1 id="thread-title" className="">Top Questions</h1>
                                    </div>
                                    <div className="col3">
                                        <div className="row pt1 pb1 ">
                                                <button id="askQuestion" className="btn btn-success btn-md btn-shadow">
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
                            {/* <div className="row mt3 mb2 show-md-hide-sm  align-center">
                            StackOverflow-lite is a platform where people can ask questions and provide answers.
                            </div> */}
                            {/* <div className="row welcome show-md-hide-sm">
                            Questack is a platform where people can ask questions and provide answers
                                
                            </div> */}
                            {!user.token
                              ? <div className="row h-sm-auto" >
                                    
                                    <ul className="align-center profile__actions">
                                   
                                        <li className="profile__actions-questions align-center ">Questack is a platform where people can ask questions and provide answers</li>
                                        
                                    </ul>
            
                            </div>
                              : <div className="row mt3 h-400" >
                                <div className="profile-avatar user-letter" >{user.username.charAt(0)}</div>
                                
                                <ul className="align-center profile__basic">
                                    <li className="profile__basic-name user">{user.username}</li>
                                    <li className="profile__basic-date">Joined: &nbsp;<span className="user-joined"></span></li>
                                    <li className="profile__basic-question">Questions Asked: <span className="no-of-q">0</span></li>
                                    <li className="profile__basic-answer">Given Answers: <span className="no-of-a">0</span> </li>
                                </ul>
                                <ul className="align-center profile__actions">
                                    <li className="profile__actions-recent"><i className=" dblue-text fa fa-question-circle-o"></i>&nbsp;<a href="./profile?thread=question-asked">Questions Asked  &nbsp;</a><span className="no-of-q green-text">0</span></li>
                                    <li className="profile__actions-answers"><i className=" dblue-text fa fa-comments"></i>&nbsp;<a href="./profile?thread=answers-given">Answers Given  &nbsp;</a><span className="no-of-a green-text">0</span></li>
                                    <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<a href="./profile?thread=mostanswer">Answered Questions</a></li>
                                    <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<a href="./profile?thread=mostanswer">Unanswered Questions</a></li>
                                    <li className="profile__actions-threads"><i className=" dblue-text fa fa-question-circle"></i>&nbsp;<a href="./profile?thread=all">All Questions  &nbsp;</a><span className="no-of-all-q green-text">0</span></li>
                                </ul>

                            </div>
                            }

                        </div>
                    </div>


                </div>
                
                
            </main>
    );
  }
}

export default Home;