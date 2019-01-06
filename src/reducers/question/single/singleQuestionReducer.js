import {
  SINGLE_QUESTION_FAILURE,
  SINGLE_QUESTION_LOADING,
  SINGLE_QUESTION_SUCCESS,

} from '../../../actions/types/allquestions';


const initialState = {
  isLoading: false,
  question: [],
  answer: [],
  preferredAnswer: [],
};

const singleQuestionReducer = (state = initialState, action) => {
  switch (action.type) {
  case SINGLE_QUESTION_LOADING:
    return {
      ...state,
      isLoading: true
    };
  case SINGLE_QUESTION_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  case SINGLE_QUESTION_SUCCESS:
    return {
      ...state,
      isLoading: false,
      question: action.question,
      answer: action.answers,
      preferredAnswer: action.preferred,
    };
  default:
    return state;
  }
};

export default singleQuestionReducer;
