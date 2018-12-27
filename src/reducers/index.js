
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import questionReducer from './questionReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({
  simpleReducer,
  questionReducer,
  loginReducer,
});