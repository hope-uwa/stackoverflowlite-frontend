
import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import questionReducer from './questionReducer'

export default combineReducers({
  simpleReducer, questionReducer,
});