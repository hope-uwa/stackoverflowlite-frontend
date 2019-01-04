import Axios from 'axios';
import {
  SINGLE_QUESTION_FAILURE,
  SINGLE_QUESTION_LOADING,
  SINGLE_QUESTION_SUCCESS,
} from '../types/allquestions';

export const questionLoading = () => ({
        type: SINGLE_QUESTION_LOADING
    });
export const questionSuccess = (question) => ({
        type:SINGLE_QUESTION_SUCCESS,
        question
    });
export const questionFailure = (error) => ({
        type: SINGLE_QUESTION_FAILURE,
        error
    });
export const loadSingleQuestion = id => (dispatch) => {
  const request = Axios({
    method: 'GET',
    url: `http://localhost:5002/api/v1/questions/${id}`,
    headers: [],
  });
  dispatch(questionLoading());
  return request.then(
    (response) => {
      console.log(response);
      dispatch(questionSuccess(response.data.question));
    },
    err => dispatch(questionFailure(err)),
  );
};