import Axios from 'axios';
import {
  LOAD_ALL_QUESTION,
  ALL_QUESTION_FAILURE,
  ALL_QUESTION_SUCCESS,
} from '../types/allquestions';

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