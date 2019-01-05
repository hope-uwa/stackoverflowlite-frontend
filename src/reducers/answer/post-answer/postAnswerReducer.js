import {
  POST_ANSWER_FAILURE,
  POST_ANSWER_SUCCESS,
} from '../../../actions/types/answers';

const initialState = {
  body: '',
};

const postAnswerReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_ANSWER_SUCCESS:
    return{
        ...state,
        message: action.message
    }
    case POST_ANSWER_FAILURE:
    return{
        ...state,
        error: action.error
    }
    default:
    return state

  }
};
export default postAnswerReducer;