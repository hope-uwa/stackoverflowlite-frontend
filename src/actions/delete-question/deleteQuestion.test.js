/* eslint-disable max-len */
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';

import {
  deleteQuestionAction
} from './deleteQuestion';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('', () => {
  afterEach(() => {
    mock.reset();
  });

  it('It should correct answer', () => {
    const message = undefined;

    mock.onDelete('https://uwaelpis.herokuapp.com/api/v1/questions/2').reply(200, {
      status: 'success',
      message,
    });

    const mockActions = [
      {
        type: 'DELETE_QUESTION_SUCCESS', message,
      },

    ];

    const store = mockStore({ });
    return store.dispatch(deleteQuestionAction(2)).then(() => expect(store.getActions()).toEqual(mockActions));
  });

  it('It should correct answer', () => {
    const error = new Error('Request failed with status code 404');
    mock.onDelete('http://localhost:5002/api/v1/questions/2').reply(404, {
      status: 'success',
      error,
    });

    const mockActions = [
      {
        type: 'DELETE_QUESTION_FAILURE', error,
      },

    ];

    const store = mockStore({ });
    return store.dispatch(deleteQuestionAction(2)).then(() => expect(store.getActions()).toEqual(mockActions));
  });
});
