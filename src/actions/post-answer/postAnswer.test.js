/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { postAnswerAction } from './postAnswer';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login actions test', () => {
  describe('post answer test', () => {
    it('should successful post answer', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        success: true,
        answer: 'this is an answer'
      };
      mock
        .onPost('https://uwaelpis.herokuapp.com/api/v1/questions/1/answers')
        .reply(200, mockData);

      const answer = {
        answer: 'this is an answer',
      };

      const expectedActions = [
        {
          type: 'POST_ANSWER_SUCCESS',
          answer: mockData,
        }
      ];

      const store = mockStore({ answer: {} });
      return store.dispatch(postAnswerAction('1', answer)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    // it('should fail to post answer', () => {
    //   const mock = new MockAdapter(Axios);
    //   const mockData = {
    //     success: false,
    //     message: 'answer can not be empty',
    //   };
    //   const errors = new Error('this is the error');
    //   const error = { error: errors };
    //   mock
    //     .onPost('https://uwaelpis.herokuapp.com/api/v1/questions/1/answers')
    //     .reply(400, mockData);

    //   const answer = {
    //     answer: 'this is an answer',
    //   };
    //   const expectedActions = [
    //     {
    //       type: 'POST_ANSWER_FAILURE',
    //       error,
    //     }
    //   ];

    //   const store = mockStore({ answer: {} });
    //   return store.dispatch(postAnswerAction(answer)).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
    // });
  });
});
