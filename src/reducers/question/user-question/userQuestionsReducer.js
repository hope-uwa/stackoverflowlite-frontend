
import {
  LOAD_ALL_QUESTION,
  USER_QUESTION_FAILURE,
  USER_QUESTION_SUCCESS
} from '../../../actions/types/allquestions';

export const initialState = {
  questions: [],
  isLoading: false,
};
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_ALL_QUESTION:
    return {
      ...state,
      isLoading: true
    };
  case USER_QUESTION_SUCCESS:
    return {
      ...state,
      questions: action.questions,
      isLoading: false
    };
  case USER_QUESTION_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default questionReducer;
