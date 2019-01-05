
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import allQuestionReducer from './question/questionReducer';
import createQuestionReducer from './question/post/postQuestionReducer';
import singleQuestion from './question/single/singleQuestionReducer';
import correctAnswerReducer from './answer/correct-answer/correctAnswerReducer';
import postAnswerReducer from './answer/post-answer/postAnswerReducer';

export default combineReducers({
  allQuestionReducer,
  loginReducer,
  createQuestionReducer,
  singleQuestion,
  correctAnswerReducer,
  postAnswerReducer,
});