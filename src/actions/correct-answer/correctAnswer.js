import Axios from 'axios';
import { toast } from 'react-toastify';
import {
  CORRECT_ANSWER_FAILURE,
  CORRECT_ANSWER_SUCCESS
} from '../types/answers';
import store from '../../store/configureStore';

export const correctAnswerSuccess = message => ({
  type: CORRECT_ANSWER_SUCCESS,
  message
});
export const correctAnswerFailure = error => ({
  type: CORRECT_ANSWER_FAILURE,
  error
});

export const correctAnswer = (qid, aid) => (dispatch) => {
  const { token } = store.getState().loginReducer;
  const request = Axios({
    method: 'PUT',
    url: `https://uwaelpis.herokuapp.com/api/v1/questions/${qid}/answers/${aid}/accept`,
    headers: { Authorization: token },
  });
  return request.then(
    (response) => {
      // console.log(response);
      toast.success('The answer has been been marked as preferred');
      dispatch(correctAnswerSuccess(response.message));
    },
    (err) => {
      // console.log(err);
      toast.warn('You can not make this the preferred answer');
      dispatch(correctAnswerFailure(err));
    },
  );
};
