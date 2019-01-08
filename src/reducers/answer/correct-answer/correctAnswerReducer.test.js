import post, { initialState } from './correctAnswerReducer';


describe('test create answer reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'CORRECT_ANSWER_SUCCESS',
      message: ''
    };
    const action1 = {
      type: 'CORRECT_ANSWER_FAILURE',
      error: ''

    };
    const state = {
      message: null
    };
    expect(post(initialState, action)).toEqual({ ...state, message: action.message });
    expect(post(initialState, action1)).toEqual({ ...state, error: action1.error });
  });
});
