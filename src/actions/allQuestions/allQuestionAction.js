import Axios from 'axios';
import { toast } from "react-toastify";
import {
  LOAD_ALL_QUESTION,
  ALL_QUESTION_FAILURE,
  ALL_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
  POST_QUESTION_SUCCESS,
} from '../types/allquestions';
import store from '../../store/configureStore'

export const loadQuestion = () => ({
        type: LOAD_ALL_QUESTION
    });
export const allQuestionSuccess = (questions) => ({
        type: ALL_QUESTION_SUCCESS,
        questions
    });
export const allQuestionFailure = (error) => ({
        type: ALL_QUESTION_FAILURE,
        error
    });
export const postQuestionSuccess =(message) =>({
    type: POST_QUESTION_SUCCESS,
    message
});
export const postQuestionFailure =(error)=>({
    type: POST_QUESTION_FAILURE,
    error
})


export const loadAllQuestion = () => (dispatch) => {
  const request = Axios({
    method: 'GET',
    url: 'http://localhost:5002/api/v1/questions',
    headers: [],
  });
  dispatch(loadQuestion);
  return request.then(
    (response) => {
  
      dispatch(allQuestionSuccess(response.data.message));
    },
    err => dispatch(allQuestionFailure(err)),
  );
};

export const postQuestion = (question) => (dispatch) => {
    const { token }= store.getState().loginReducer
    const request = Axios({
      method: 'POST',
      url: 'http://localhost:5002/api/v1/questions',
      data: question,
      headers: { 'Authorization': token},
    });
    dispatch(loadQuestion);
    return request.then(
      (response) => {
        console.log(response)
        toast.success("Question posted successfully");
        dispatch(postQuestionSuccess(response.data.message));
      },
      err => {
          console.log(err.response.data.error)
        toast.warn(`${err.response.data.error}`);
          dispatch(postQuestionFailure(err))},
    );
  };