import login, { initialState } from './loginReducer';


describe('test create answer reducer', () => {
  it('it should return an object', () => {
    const action = {
      type: 'LOGIN_SUCCESS',
      user: {
        token: '',
        name: ''
      }
    };
    const action1 = {
      type: 'LOGIN_FAILURE',
      error: ''

    };
    const action2 = {
      type: 'SIGN_UP_SUCCESS',
      user: {
        data: {
          token: 'cc',
          userName: 'cc'
        }
      }
    };
    const action3 = {
      type: 'SIGN_UP_FAILURE',
      error: ''

    };
    const action4 = {
      type: 'LOG_OUT',
    };
    const state = {
      loading: false,
      success: false,
      error: null,
      token: null,
      username: null,
    };
    localStorage.setItem('user', JSON.stringify({
      ...state,
      loading: false,
      success: true,
      token: action.user.token,
      username: action.user.name,
    }));
    expect(login(initialState, action)).toEqual({
      ...state,
      loading: false,
      success: true,
      token: action.user.token,
      username: action.user.name,
    });
    expect(login(initialState, action1)).toEqual({
      ...state,
      loading: false,
      error: action1.error,
    });
    expect(login(initialState, action2)).toEqual({
      ...state,
      loading: false,
      error: null,
      token: action2.user.data.token,
      username: action2.user.data.userName
    });
    expect(login(initialState, action3)).toEqual({
      ...state,
      loading: false,
      error: action3.error,
      user: null,
    });

    expect(login(initialState, action4)).toEqual({
      ...state,
      success: true,
      loading: null,
      token: null,
      username: null,
    });
  });
});
