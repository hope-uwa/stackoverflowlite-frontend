import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import thunk from 'redux-thunk';


import {
  loadSingleQuestion

} from './singleQuestion';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('', () => {
  afterEach(() => {
    mock.reset();
  });

  it('It fetch all questions', () => {
    const error = new Error('Request failed with status code 404');
    mock.onGet('https://uwaelpis.herokuapp.com/api/v1/questions/12345').reply(404, {
      status: 'success',
      error,
    });

    const mockActions = [{
      type: 'SINGLE_QUESTION_LOADING'
    }, { error, type: 'SINGLE_QUESTION_FAILURE' }];

    const store = mockStore({ });
    // eslint-disable-next-line max-len
    return store.dispatch(loadSingleQuestion()).then(() => expect(store.getActions()).toEqual(mockActions));
  });
});
