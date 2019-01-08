/* eslint-disable max-len */
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


export class Sidebar extends React.Component {
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
    const userQuestion = allQuestions.filter(x => x.user_name === store.getState().loginReducer.username).length;
    this.setState({
      questionNo, answered, unanswered, userQuestion
    });
  }

    componentDidMount =() => {
      this.props.loadQ();
    }


    render() {
      const user = this.props.userInfo;
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
                  <li className="profile__actions-questions"><Link to="/answered"><i className="dblue-text fa fa-fire"></i>&nbsp;Answered Questions &nbsp;<span className="no-of-q green-text">{answered}</span></Link></li>
                  <li className="profile__actions-questions"><Link to="/unanswered"><i className="dblue-text fa fa-fire"></i>&nbsp;Unanswered Questions &nbsp;<span className="no-of-q green-text">{unanswered}</span></Link></li>
                  <li className="profile__actions-threads"> <Link to="/"><i className=" dblue-text fa fa-comments"></i>&nbsp;All Questions  &nbsp;<span className="no-of-all-q green-text">{questionNo}</span></Link></li>
                </ul>


              </ul>

            </div>
            : <div className="row sidebar-fixed mt2 mb2" >
              <div className="profile-avatar user-letter" >{user.username.charAt(0)}</div>

              <ul className="align-center profile__basic">
                <li className="profile__basic-name user">{user.username}</li>
                <li className="profile__basic-date">&nbsp;
                  <span className="user-joined"></span>
                </li>
              </ul>
              <ul className="align-center profile__actions">
                <li className="profile__actions-recent"><Link to="/user"><i className=" dblue-text fa fa-filter"></i>&nbsp;Questions Asked  &nbsp;<span className="no-of-q green-text">{userQuestion}</span></Link></li>
                <li className="profile__actions-questions"><Link to="/answered"><i className="dblue-text fa fa-fire"></i>&nbsp;Answered Questions &nbsp;<span className="no-of-q green-text">{answered}</span></Link></li>
                <li className="profile__actions-questions"><Link to="/unanswered"><i className="dblue-text fa fa-fire"></i>&nbsp;Unanswered Questions &nbsp;<span className="no-of-q green-text">{unanswered}</span></Link></li>
                <li className="profile__actions-threads"><Link to="/"><i className=" dblue-text fa fa-comments"></i>&nbsp;All Questions  &nbsp;<span className="no-of-all-q green-text">{questionNo}</span></Link></li>
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
export const mapStateToProps = (state) => {
  return {
    userInfo: state.loginReducer,
    questions: state.allQuestionReducer.questions,
  };
};
export const mapDispatchToProps = {
  loadQ: () => loadAllQuestion(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
