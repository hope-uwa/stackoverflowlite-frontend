import React from 'react';
import {connect} from 'react-redux';
import {
loadSingleQuestion
} from '../../../actions/single-question/singleQuestion';


export class SingleQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount =()=>{
      const {id} = this.props
      this.props.getSingleQuestion(id)
  }
  render(){
      console.log(this.props)
      const { question } = this.props;
      
      return(
           
        <div className="row align-left question-board pl2 pb1 mb1 pls1">
            <div className="col9">
                <div className="question-head mb1">
                    <h1> {question.title}</h1>
                    <span className="ml2">5 days ago by</span><span>Elpis</span>
                </div>
            </div>
            <div className="col3 pt1 pb1">
                <button id="" className="btn btn-success btn-md btn-shadow">
                        Add an Answer
                </button>
            </div>
            <div className="question-body">
                {question.body}
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