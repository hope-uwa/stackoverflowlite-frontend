/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
import types from './actionTypes';

export function createQuestion(question) {
  return { type: types.CREATE_QUESTION, question };
}

export function loadQuestionSuccess(question) {
  return { type: types.LOAD_QUESTION_SUCCESS, question };
}

export function loadQuestion() {
  return function (dispatch) {
    const getQ = fetch('https://cors-anywhere.herokuapp.com/https://uwaelpis.herokuapp.com/api/v1/questions');
    return getQ.then((data) => {
      data.json().then((questions) => {
        dispatch(loadQuestionSuccess(questions.message));
      }).catch((error) => {
        throw (error);
      });
    });
  };
}
