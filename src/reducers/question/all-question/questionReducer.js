
import {
  ALL_QUESTION_SUCCESS,
  ALL_QUESTION_FAILURE,
} from '../../../actions/types/allquestions';

export const initialState = {
  questions: [],
  isLoading: false,
};
const questionReducer = (state = initialState, action) => {
  switch (action.type) {
  case ALL_QUESTION_SUCCESS:
    return {
      ...state,
      questions: action.questions,
      isLoading: false
    };
  case ALL_QUESTION_FAILURE:
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
