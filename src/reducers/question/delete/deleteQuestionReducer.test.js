import deletePost, { initialState } from './deleteQuestionReducer';


describe('test post answer reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'DELETE_QUESTION_SUCCESS',
      message: ''
    };
    const action1 = {
      type: 'DELETE_QUESTION_FAILURE',
      error: ''

    };
    const state = {
      message: '',
      error: '',
      success: ''
    };
    expect(deletePost(initialState, action)).toEqual({
      ...state,
      message: action.message,
      status: 'success'
    });
    expect(deletePost(initialState, action1)).toEqual({ ...state, error: action1.error });
  });
});
