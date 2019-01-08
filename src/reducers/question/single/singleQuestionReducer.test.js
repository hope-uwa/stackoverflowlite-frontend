import Single, { initialState } from './singleQuestionReducer';


describe('test single Question reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'SINGLE_QUESTION_LOADING',
      message: ''
    };
    const action1 = {
      type: 'SINGLE_QUESTION_FAILURE',
      error: ''

    };
    const action2 = {
      type: 'SINGLE_QUESTION_SUCCESS',
      question: '',
      answers: '',
      preferred: ''

    };
    const state = {
      isLoading: false,
      question: [],
      answer: [],
      preferredAnswer: [],
    };
    expect(Single(initialState, action)).toEqual({
      ...state,
      isLoading: true
    });
    expect(Single(initialState, action1)).toEqual({
      ...state,
      isLoading: false,
      error: action1.error
    });
    expect(Single(initialState, action2)).toEqual({
      ...state,
      isLoading: false,
      question: action2.question,
      answer: action2.answers,
      preferredAnswer: action2.preferred,
    });
  });
});
