import Post, { initialState } from './postQuestionReducer';


describe('test post Question reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'POST_QUESTION_SUCCESS',
      message: ''
    };
    const action1 = {
      type: 'POST_QUESTION_FAILURE',
      error: ''

    };
    const state = {
      message: '',
      error: '',
      success: ''
    };
    expect(Post(initialState, action)).toEqual({
      ...state,
      message: action.message,
      status: 'success'
    });
    expect(Post(initialState, action1)).toEqual({ ...state, error: action1.error });
  });
});
