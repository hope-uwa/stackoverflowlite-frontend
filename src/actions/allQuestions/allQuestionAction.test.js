/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';

import {
  LOAD_ALL_QUESTION,
  ALL_QUESTION_FAILURE,
  ALL_QUESTION_SUCCESS,
  POST_QUESTION_FAILURE,
  POST_QUESTION_SUCCESS,
} from '../types/allquestions';

import {
  loadAllQuestion,
  allQuestionFailure,
  allQuestionSuccess,
  loadQuestion,
  postQuestion,
  postQuestionFailure,
  postQuestionSuccess,
  loadUserQuestions

} from './allQuestionAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);


describe('', () => {
  afterEach(() => {
    mock.reset();
  });

  it('It fetch all questions', () => {
    const question = undefined;

    mock.onGet('https://uwaelpis.herokuapp.com/api/v1/questions').reply(200, {
      status: 'success',
      question,
    });

    const mockActions = [
      {
        type: 'ALL_QUESTION_SUCCESS', questions: question,
      },

    ];

    const store = mockStore({ });
    return store.dispatch(loadAllQuestion()).then(() => expect(store.getActions()).toEqual(mockActions));
  });

  // it('It fetch user questions', () => {
  //   const questions = [

  //   ];

  //   mock.onGet('http://localhost:5002/api/v1/questions').reply(200, {
  //     status: 'success',
  //     questions,
  //   });

  //   const mockActions = [
  //     {
  //       type: 'POST_QUESTION_SUCCESS', questions: question,
  //     },

  //   ];

  //   const store = mockStore({ });
  //   return store.dispatch(loadUserQuestions()).then(() => expect(store.getActions()).toEqual(mockActions));
  // });

  it('It fail on fetch all questions', () => {
    const serverError = new Error('Request failed with status code 500');
    const error = serverError;

    mock.onGet('https://uwaelpis.herokuapp.com/api/v1/questions').reply(500, {
      status: 'success',
      error
    });

    const mockActions = [
      {
        type: 'ALL_QUESTION_FAILURE', error
      }
    ];

    const store = mockStore({ });
    return store.dispatch(loadAllQuestion()).then(() => expect(store.getActions()).toEqual(mockActions));
  });

  it('It fail on fetch user questions', () => {
    const serverError = new Error('Request failed with status code 500');
    const error = serverError;

    mock.onGet('https://uwaelpis.herokuapp.com/api/v1/questions').reply(500, {
      status: 'success',
      error
    });

    const mockActions = [
      {
        type: 'USER_QUESTION_FAILURE', error
      }
    ];

    const store = mockStore({ });
    return store.dispatch(loadUserQuestions()).then(() => expect(store.getActions()).toEqual(mockActions));
  });

  it('should post question successfully', () => {
    const mockData = {
      success: true,
      message: 'stuff',

    };
    mock
      .onPost('https://uwaelpis.herokuapp.com/api/v1/questions')
      .reply(200, mockData);

    const question = {
      title: 'this is the title',
      body: 'this is the body',
    };

    const expectedActions = [
      {
        type: 'POST_QUESTION_SUCCESS',
        message: 'stuff'
      }

    ];

    const store = mockStore({ question: {} });
    return store.dispatch(postQuestion(question)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should fail to post question', () => {
    const serverError = new Error('Request failed with status code 400');
    const error = serverError;
    const mockData = {
      success: true,
      message: 'stuff',

    };

    mock
      .onPost('https://uwaelpis.herokuapp.com/api/v1/questions')
      .reply(400, mockData);

    const question = {
      title: '',
      body: 'this is the body',
    };

    const expectedActions = [
      {
        type: 'POST_QUESTION_FAILURE',
        error
      },
    ];

    const store = mockStore({ question: {} });
    return store.dispatch(postQuestion(question)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });


  it('loading questions', () => {
    const expected = {
      type: LOAD_ALL_QUESTION,
    };
    const action = loadQuestion();
    expect(action).toEqual(expected);
  });
  it('successfully load questions', () => {
    const questions = {};
    const expected = {
      type: ALL_QUESTION_SUCCESS,
      questions,
    };
    const action = allQuestionSuccess(questions);
    expect(action).toEqual(expected);
  });

  it('failed loading of questions', () => {
    const error = {};
    const errorLoading = {
      type: ALL_QUESTION_FAILURE,
      error,
    };
    const action = allQuestionFailure(error);
    expect(action).toEqual(errorLoading);
  });

  it('successfully post questions', () => {
    const message = {};
    const expected = {
      type: POST_QUESTION_SUCCESS,
      message,
    };
    const action = postQuestionSuccess(message);
    expect(action).toEqual(expected);
  });

  it('failed post questions', () => {
    const error = {};
    const expected = {
      type: POST_QUESTION_FAILURE,
      error,
    };
    const action = postQuestionFailure(error);
    expect(action).toEqual(expected);
  });
});
