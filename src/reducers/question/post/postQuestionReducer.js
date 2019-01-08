import {
  POST_QUESTION_FAILURE,
  POST_QUESTION_SUCCESS,
} from '../../../actions/types/allquestions';

export const initialState = {
  message: '',
  error: '',
  success: ''
};

const postQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case POST_QUESTION_SUCCESS:
    return {
      ...state,
      message: action.message,
      status: 'success'
    };
  case POST_QUESTION_FAILURE:
    return {
      ...state,
      error: action.error
    };
  default:
    return {
      ...state
    };
  }
};
export default postQuestionReducer;
