import AllQ, { initialState } from './questionReducer';


describe('test post Question reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'ALL_QUESTION_SUCCESS',
      questions: ''
    };
    const action1 = {
      type: 'ALL_QUESTION_FAILURE',
      error: ''

    };
    const state = {
      questions: [],
      isLoading: false,
    };
    expect(AllQ(initialState, action)).toEqual({
      ...state,
      questions: action.questions,
      isLoading: false
    });
    expect(AllQ(initialState, action1)).toEqual({ ...state, error: action1.error });
  });
});
