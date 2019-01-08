/* eslint-disable max-len */
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';

import {
  correctAnswer,
} from './correctAnswer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('', () => {
  afterEach(() => {
    mock.reset();
  });

  it('It should correct answer', () => {
    const message = undefined;

    mock.onPut('https://uwaelpis.herokuapp.com/api/v1/questions/2/answers/3/accept').reply(200, {
      status: 'success',
      message,
    });

    const mockActions = [
      {
        type: 'CORRECT_ANSWER_SUCCESS', message,
      },

    ];

    const store = mockStore({ });
    return store.dispatch(correctAnswer(2, 3)).then(() => expect(store.getActions()).toEqual(mockActions));
  });

  it('It should correct answer', () => {
    const error = new Error('Request failed with status code 404');
    mock.onPut('https://uwaelpis.herokuapp.com/api/v1/questions/2/answers/3').reply(404, {
      status: 'success',
      error,
    });

    const mockActions = [
      {
        type: 'CORRECT_ANSWER_FAILURE', error,
      },

    ];

    const store = mockStore({ });
    return store.dispatch(correctAnswer(1, 2)).then(() => expect(store.getActions()).toEqual(mockActions));
  });
});
