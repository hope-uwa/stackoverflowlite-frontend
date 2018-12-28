/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { connect } from 'react-redux';
import { loadAllQuestion } from '../../actions/allQuestions/allQuestionAction'
import AllQuestion from '../presentation/allquestions/AllQuestions';
import QuestionsDisplay from './QuestionsDisplay';
import store from '../../store/configureStore';
import PostQuestion from './question/PostQuestion';
import Banner from './banner/Banner';
import Sidebar from '../common/sidebar/Sidebar'; 

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

  componentWillMount =()=>{
      this.props.loadQuestion();
  }
  render() {
    
    const user = store.getState().loginReducer;
    const {allQuestion} = this.props;
    
    return (
            <main>
                
                <div className="container">
                    <div className="row">
                        <div className="col9 colsm12  col-order2 ">
                        <Banner/>
                        <div className=" allquestion row pl2 pls1">
                            {allQuestion.map((x, key)=><AllQuestion questions={x} key={key} />)}  
                        
                        </div>
                        <div className="pagination">
                            <a href="#">❮</a>
                            <a href="#">❯</a>
                        </div>
                        </div>
                        <Sidebar user={user}/>
                    </div>


                </div>
                
                
            </main>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    allQuestion: state.allQuestionReducer.questions,
  };
};

const mapDispatchToProps = {
    loadQuestion : ()=> loadAllQuestion()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);