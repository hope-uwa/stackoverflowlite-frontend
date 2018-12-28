
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import allQuestionReducer from './question/questionReducer';
import createQuestionReducer from './question/post/postQuestionReducer';

export default combineReducers({
  allQuestionReducer,
  loginReducer,
  createQuestionReducer,
});