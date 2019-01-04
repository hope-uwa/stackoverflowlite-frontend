import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import {
loadSingleQuestion
} from '../../../actions/single-question/singleQuestion';
import Answer from '../../presentation/viewanswers/answers';
import PreferredAnswer from '../../presentation/preferred/PreferredAnswer';
import store from '../../../store/configureStore';

export class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = ()=>{
      const {id} = this.props
      this.props.getSingleQuestion(id)
  }

  render(){
    const user = store.getState().loginReducer;
      const { question } = this.props;
      console.log('q')
      console.log(user,question)
      const noAnswer = 'No answer added yet' 
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
            <span className="droptip"><span className="droptiptext">
            <ul className="question-actions">
                <li>Delete</li>
                <li>Edit</li>
            </ul>
            </span><i className="question-droptip ml1 msl1 fa fa-ellipsis-v"></i></span>
                
            </div>
            <div className="question-body">
                {question.body}
            </div>   
        </div>
        <PreferredAnswer />
        <div className="row  mls0 pb3 answers-board">
      {Array.isArray(question.answers) ? question.answers.map(x=> <Answer answers={x} key={x.id}/>) : <h1>No answer has been provided yet</h1> }            
        </div>
     </div>

      )
  }
}

const mapStateToProps = (state, myOwnProps )=>{
    console.log(state)
    return{
        id: myOwnProps.match.params.id,
        question: state.singleQuestion.question

    }
}
const mapDispatchToProps ={
    getSingleQuestion : (x)=> loadSingleQuestion(x)
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleQuestion);