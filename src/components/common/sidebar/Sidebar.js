/* eslint-disable react/sort-comp */
/* eslint-disable import/prefer-default-export */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../../store/configureStore';
import {
  loadAllQuestion
} from '../../../actions/allQuestions/allQuestionAction';


class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNo: '',
      answered: '',
      unanswered: '',
      userQuestion: ''
    };
  }


  componentWillReceiveProps(props) {
    const allQuestions = props.questions;
    const questionNo = allQuestions.length;
    const unanswered = allQuestions.filter(x => x.count < 1).length;
    const answered = allQuestions.filter(x => x.count > 0).length;
    const userQuestion = allQuestions.filter(x => x.user_name === store.getState().username).length;
    this.setState({
 questionNo, answered, unanswered, userQuestion 
});
  }

    componentDidMount =() => {
      this.props.loadQ();
    }


    render() {
    // const user = store.getState().loginReducer;
      const user = this.props.userInfo;
      const { questions, userQuestionLength } = this.props;
      console.log('error', this.state);
      const {
 questionNo, unanswered, answered, userQuestion 
} = this.state;
      return (
        <div className="col3 colsm12 sidebar col-order1 " >

          {!user.token
            ? <div className="row sidebar-fixed h-sm-auto" >

              <ul className="align-center profile__actions">

                <li className="profile__actions-questions align-center ">
                  <h3>Questack is a platform where people can ask questions and provide answers</h3>
                </li>
                <ul className="align-center profile__actions">
                  <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<Link to="/">Answered Questions &nbsp;</Link><span className="no-of-q green-text">{answered}</span></li>
                  <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<Link to="/">Unanswered Questions &nbsp;</Link><span className="no-of-q green-text">{unanswered}</span></li>
                  <li className="profile__actions-threads"><i className=" dblue-text fa fa-comments"></i>&nbsp;<Link to="/">All Questions  &nbsp;</Link><span className="no-of-all-q green-text">{questionNo}</span></li>
                </ul>


              </ul>

            </div>
            : <div className="row sidebar-fixed mt2 mb2" >
              <div className="profile-avatar user-letter" >{user.username.charAt(0)}</div>

              <ul className="align-center profile__basic">
                <li className="profile__basic-name user">{user.username}</li>
                <li className="profile__basic-date">Joined: &nbsp;
                  <span className="user-joined"></span>
                </li>
              </ul>
              <ul className="align-center profile__actions">
                <li className="profile__actions-recent"><i className=" dblue-text fa fa-filter"></i>&nbsp;<Link to="/user">Questions Asked  &nbsp;</Link><span className="no-of-q green-text">{userQuestion}</span></li>
                <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<Link to="/answered">Answered Questions &nbsp;</Link><span className="no-of-q green-text">{answered}</span></li>
                <li className="profile__actions-questions"><i className="dblue-text fa fa-fire"></i>&nbsp;<Link to="/">Unanswered Questions &nbsp;</Link><span className="no-of-q green-text">{unanswered}</span></li>
                <li className="profile__actions-threads"><i className=" dblue-text fa fa-comments"></i>&nbsp;<Link to="/">All Questions  &nbsp;</Link><span className="no-of-all-q green-text">{questionNo}</span></li>
              </ul>

            </div>
          }

        </div>

      );
    }
}

Sidebar.propTypes = {
  userInfo: PropTypes.object,
  questions: PropTypes.array,
  userQuestionLength: PropTypes.number,
  loadQ: PropTypes.func,
  loadUQ: PropTypes.func
};

// export default Sidebar;
const mapStateToProps = (state) => {

  return {
    userInfo: state.loginReducer,
    questions: state.allQuestionReducer.questions,
  };
};
const mapDispatchToProps = {
  loadQ: () => loadAllQuestion(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
