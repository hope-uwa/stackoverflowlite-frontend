import UserQ, { initialState } from './userQuestionsReducer';


describe('test user Question reducer', () => {
  it('it should return an object', () => {
    const action1 = {
      type: 'USER_QUESTION_FAILURE',
      error: ''

    };
    const action2 = {
      type: 'USER_QUESTION_SUCCESS',
      question: '',

    };
    const state = {
      questions: [],
      isLoading: false,
    };

    expect(UserQ(initialState, action1)).toEqual({
      ...state,
      isLoading: false,
      error: action1.error
    });
    expect(UserQ(initialState, action2)).toEqual({
      ...state,
      questions: action2.questions,
      isLoading: false
    });
  });
});
