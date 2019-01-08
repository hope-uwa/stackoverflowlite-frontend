import post, { initialState } from './postAnswerReducer';


describe('test post answer reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'POST_ANSWER_SUCCESS',
      answer: []
    };
    const action1 = {
      type: 'POST_ANSWER_FAILURE',
      error: ''

    };
    const state = {
      answer: [],
      success: false
    };
    expect(post(initialState, action)).toEqual({ ...state, success: true, answer: action.answer });
    expect(post(initialState, action1)).toEqual({ ...state, error: action1.error });
  });
});
