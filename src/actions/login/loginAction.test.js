/* eslint-disable no-unused-vars */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginUser, logoutUser } from './loginAction';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login actions test', () => {
  describe('async login actions test', () => {
    it('should successful login', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        success: true,
        message: 'successfully logged in',
        token: 'token',
        id: 'id',
      };
      mock
        .onPost('https://uwaelpis.herokuapp.com/api/v1/auth/login')
        .reply(200, mockData);

      const user = {
        email: 'uwahope007@andela.com',
        password: 'password1234',
      };

      const expectedActions = [
        {
          type: 'LOGIN_SUCCESS',
          user: mockData,
        }
      ];

      const store = mockStore({ user: {} });
      return store.dispatch(loginUser(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    // it('should dispatch LOGIN_BEGIN and LOGIN_ERROR when loginRequest fails', () => {
    //   const mock = new MockAdapter(Axios);
    //   const mockData = {
    //     success: false,
    //     message: 'email or password incorrect',
    //   };
    //   const error = new Error('This is the answer');
    //   mock
    //     .onPost('http://localhost:5002/api/v1/auth/login')
    //     .reply(400, mockData);

    //   const user = {
    //     email: 'uwahope007@andela.com',
    //     password: 'password1234',
    //   };
    //   const expectedActions = [
    //     {
    //       type: 'LOGIN_FAILURE',
    //       error: mockData,
    //     }
    //   ];

    //   const store = mockStore({ user: {} });
    //   return store.dispatch(loginUser(user)).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
    // });

    // it('logout', () => {
    //   const expectedActions = [
    //     {
    //       type: 'LOG_OUT'
    //     }
    //   ];
    //   const user = {
    //   };
    //   const store = mockStore({ user: {} });
    //   return store.dispatch(logoutUser()).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions);
    //   });
    // });
  });
});
