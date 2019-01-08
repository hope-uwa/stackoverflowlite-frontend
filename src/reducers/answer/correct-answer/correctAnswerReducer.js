import {
  CORRECT_ANSWER_FAILURE,
  CORRECT_ANSWER_SUCCESS,
} from '../../../actions/types/answers';

export const initialState = {
  message: null,
};

const correctAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
  case CORRECT_ANSWER_SUCCESS:
    return {
      ...state,
      message: action.message,
    };
  case CORRECT_ANSWER_FAILURE:
    return {
      ...state,
      error: action.error
    };
  default:
    return initialState;
  }
};

export default correctAnswerReducer;
