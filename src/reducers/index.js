
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import questionReducer from './questionReducer';
import signupReducer from './signup/signupReducer';

export default combineReducers({
  simpleReducer,
  questionReducer,
  signupReducer,
});