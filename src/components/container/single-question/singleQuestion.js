import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {
loadSingleQuestion
} from '../../../actions/single-question/singleQuestion';
import Answer from '../../presentation/viewanswers/answers';
import PreferredAnswer from '../../presentation/preferred/PreferredAnswer';
import store from '../../../store/configureStore';
import { correctAnswer } from '../../../actions/correct-answer/correctAnswer';
import PostAnswer from '../../presentation/postanswer/postAnswer';
import { postAnswerAction } from '../../../actions/post-answer/postAnswer';

export class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  makePreferred = (qid, aid)=>{
      console.log('gothere!!!')
      this.props.chooseAnswer(qid, aid);
  }

  componentDidMount = ()=>{
      const {id} = this.props
      this.props.getSingleQuestion(id)
  }

  render(){
    const user = store.getState().loginReducer;
      const { question, id ,answers, preferred, postAnswer} = this.props;
      let auth = false;
      if(user.username=== question.username){
        auth = true;
      }
      console.log(auth)
      return(
        <div>   
        <div className="row align-left question-board pl2 pb1 mb1 pls1">
            <div className="col9">
                <div className="question-head mb1">
                    <h1> {question.title}</h1>
                    <span className="ml2">{question.dateCreated}</span>&nbsp;by &nbsp;<span>{question.username}</span>
                </div>
            </div>
            <div className="col3 pt2 pb1">
            { auth && <span className="droptip"><span className="droptiptext">
            <ul className="question-actions">
                <li>Delete</li>
                <li>Edit</li>
            </ul>
            </span><i className="question-droptip ml1 msl1 fa fa-ellipsis-v"></i></span>}
                
            </div>
            <div className="question-body">
                {question.body}
            </div>   
        </div>
        <PreferredAnswer answer={preferred} />
        <div className="row  mls0 pb3 answers-board">
      {Array.isArray(answers) ? answers.map(x=> <Answer answers={x} key={x.id} correct ={this.makePreferred} qid={id} auth={auth}/>) : preferred ? '': <h3>No answer has been provided yet</h3> }            
        </div>
        {user.token ? <PostAnswer post={postAnswer} id={id}/>: <p className="align-center blckgrey-text">You have to login to add an answer</p>}
     </div>

      )
  }
}

const mapStateToProps = (state, myOwnProps )=>{
    console.log(state)
    return{
        id: myOwnProps.match.params.id,
        question: state.singleQuestion.question,
        answers: state.singleQuestion.answer,
        preferred: state.singleQuestion.preferredAnswer,

    }
}
const mapDispatchToProps ={
    getSingleQuestion : (x)=> loadSingleQuestion(x),
    chooseAnswer : (qid, aid) => correctAnswer( qid, aid ),
    postAnswer: (qid, answer) => postAnswerAction(qid, answer)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);