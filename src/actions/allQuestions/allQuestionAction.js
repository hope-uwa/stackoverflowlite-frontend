
import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  LOAD_ALL_QUESTION,
  ALL_QUESTION_FAILURE,
  ALL_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
  POST_QUESTION_SUCCESS,
  USER_QUESTION_SUCCESS,
  USER_QUESTION_FAILURE
} from '../types/allquestions';
import store from '../../store/configureStore';

const { username } = store.getState().loginReducer;

export const loadQuestion = () => ({
  type: LOAD_ALL_QUESTION
});
export const allQuestionSuccess = questions => ({
  type: ALL_QUESTION_SUCCESS,
  questions
});
export const allQuestionFailure = error => ({
  type: ALL_QUESTION_FAILURE,
  error
});
export const postQuestionSuccess = message => ({
  type: POST_QUESTION_SUCCESS,
  message
});
export const postQuestionFailure = error => ({
  type: POST_QUESTION_FAILURE,
  error
});

export const userQuestionFailure = error => ({
  type: USER_QUESTION_FAILURE,
  error
});

export const userQuestionSuccess = questions => ({
  type: USER_QUESTION_SUCCESS,
  questions
});


export const loadAllQuestion = () => (dispatch) => {
  const request = Axios({
    method: 'GET',
    url: 'https://uwaelpis.herokuapp.com/api/v1/questions',
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

export const postQuestion = question => (dispatch) => {
  const request = Axios({
    method: 'POST',
    url: 'https://uwaelpis.herokuapp.com/api/v1/questions',
    data: question,
    headers: { Authorization: store.getState().loginReducer.token },
  });
  dispatch(loadQuestion);
  return request.then(
    (response) => {
      toast.success('Question posted successfully');
      dispatch(postQuestionSuccess(response.data.message));
    },
    (err) => {
      toast.warn(`${err.response.data.error}`);
      dispatch(postQuestionFailure(err));
    },
  );
};


export const loadUserQuestions = () => (dispatch) => {
  const request = Axios({
    method: 'GET',
    url: 'https://uwaelpis.herokuapp.com/api/v1/questions',
    headers: [],
  });
  dispatch(loadQuestion);
  return request.then(
    (response) => {
      const allQuestions = response.data.message;
      const userQuestions = allQuestions.filter(x => x.user_name === username);
      dispatch(userQuestionSuccess(userQuestions));
    },
    err => dispatch(userQuestionFailure(err)),
  );
};
