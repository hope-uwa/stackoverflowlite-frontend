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

} from './allQuestionAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);
const baseURL = 'https://uwaelpis.herokuapp.com/api/v1/questions';


describe('', () => {
  afterEach(() => {
    mock.reset();
  });

  it('It fetch a single article', () => {
    // const question = [
    //   { 
    //     id: 25, 
    //     question_title: "ask a questionbhere", 
    //     question_body: "where is the question you want to ask", 
    //     created_at: "2018-12-27T23:39:57.000Z", 
    //     user_name: "hope",
    //   },
        
    // ];

    mock.onGet('http://localhost:5002/api/v1/questions').reply(200, {
      status: 'success',
      questions,
    });

    const questions = undefined;
    const mockActions = [
      // {
      //   type: LOAD_ALL_QUESTION,
      // }, 
      {
        type: ALL_QUESTION_SUCCESS, questions,
      },
    ];

    const store = mockStore({ });
    return store.dispatch(loadAllQuestion()).then(() => expect(store.getActions()).toEqual(mockActions));
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