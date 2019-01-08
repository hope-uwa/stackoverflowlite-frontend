import Axios from 'axios';
import { toast } from 'react-toastify';
import store from '../../store/configureStore';
import {
  POST_ANSWER_FAILURE,
  POST_ANSWER_SUCCESS
} from '../types/answers';

export const postAnswerSuccess = answer => ({
  type: POST_ANSWER_SUCCESS,
  answer
});
export const postAnswerFailure = error => ({
  type: POST_ANSWER_FAILURE,
  error
});

export const postAnswerAction = (qid, answer) => (dispatch) => {
  const { token } = store.getState().loginReducer;
  const request = Axios({
    method: 'POST',
    url: `https://uwaelpis.herokuapp.com/api/v1/questions/${qid}/answers`,
    data: answer,
    headers: { Authorization: token },
  });
  return request.then(
    (response) => {
      toast.success('Answer posted successfully');
      dispatch(postAnswerSuccess(response.data));
    },
    (err) => {
      toast.warn(`${err.response.data.error}`);
      dispatch(postAnswerFailure(err));
    },
  );
};
