
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import allQuestionReducer from './question/questionReducer';

export default combineReducers({
  allQuestionReducer,
  loginReducer,
});