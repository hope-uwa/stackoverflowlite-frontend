import { POST_ANSWER_FAILURE, POST_ANSWER_SUCCESS, } from '../../../actions/types/answers';

const initialState = {
  answer: [],
  success: false
};

const postAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
  case POST_ANSWER_SUCCESS:
    return {
      ...state,
      success: true,
      answer: action.answer
    };
  case POST_ANSWER_FAILURE:
    return {
      ...state,
      error: action.error
    };
  default:
    return state;
  }
};
export default postAnswerReducer;
