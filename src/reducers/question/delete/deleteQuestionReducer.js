import {
  DELETE_QUESTION_FAILURE, DELETE_QUESTION_SUCCESS
} from '../../../actions/types/allquestions';

export const initialState = {
  message: '',
  error: '',
  success: ''
};

const deleteQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case DELETE_QUESTION_SUCCESS:
    return {
      ...state,
      message: action.message,
      status: 'success'
    };
  case DELETE_QUESTION_FAILURE:
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
export default deleteQuestionReducer;
