
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import allQuestionReducer from './question/questionReducer';
import createQuestionReducer from './question/post/postQuestionReducer';
import singleQuestion from './question/single/singleQuestionReducer';

export default combineReducers({
  allQuestionReducer,
  loginReducer,
  createQuestionReducer,
  singleQuestion,
});