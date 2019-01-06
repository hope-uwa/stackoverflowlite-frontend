import Axios from 'axios';
import {
  SINGLE_QUESTION_FAILURE,
  SINGLE_QUESTION_LOADING,
  SINGLE_QUESTION_SUCCESS,
} from '../types/allquestions';
import PreferredAnswer from '../../components/presentation/preferred/PreferredAnswer';

export const questionLoading = () => ({
        type: SINGLE_QUESTION_LOADING
    });
export const questionSuccess = (question,answers, preferred) => ({
        type:SINGLE_QUESTION_SUCCESS,
        question,
        answers,
        preferred
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
      const answerArray = response.data.question.answers;
      const preferred = Array.isArray(answerArray) ? answerArray.filter(x=> x.preferred==='true'): ''
      const answers = Array.isArray(answerArray) ? answerArray.filter(x=> x.preferred !== 'true'): ''
      const preferredArray = preferred ? preferred : []
      dispatch(questionSuccess(response.data.question, answers, preferredArray));
    },
    err => dispatch(questionFailure(err)),
  );
};