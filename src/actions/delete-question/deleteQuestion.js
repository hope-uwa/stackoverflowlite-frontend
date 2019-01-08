import Axios from 'axios';
import { toast } from 'react-toastify';
import store from '../../store/configureStore';
import {
  DELETE_QUESTION_FAILURE,
  DELETE_QUESTION_SUCCESS
} from '../types/allquestions';

export const deleteQuestionSuccess = message => ({
  type: DELETE_QUESTION_SUCCESS,
  message
});
export const deleteQuestionFailure = error => ({
  type: DELETE_QUESTION_FAILURE,
  error
});

export const deleteQuestionAction = qid => (dispatch) => {
  const { token } = store.getState().loginReducer;
  const request = Axios({
    method: 'DELETE',
    url: `https://uwaelpis.herokuapp.com/api/v1/questions/${qid}`,
    headers: { Authorization: token },
  });
  return request.then(
    (response) => {
      toast.success('Question deleted successfully');
      dispatch(deleteQuestionSuccess(response.data.message));
    },
    (err) => {
      toast.warn(`${err.response}`);
      dispatch(deleteQuestionFailure(err));
    },
  );
};
