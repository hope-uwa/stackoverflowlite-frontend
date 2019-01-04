/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Login from './Login';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('<Login />', () => {
  it('matches the snapshoot', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const wrapper = mount(<Provider store={store}>
      <Login/>
    </Provider>);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('call function', () => {
    const mockSignupFn = jest.fn();
    const initialState = {};
    const store = mockStore(initialState);

    const wrapper = shallow(<Provider store={store}>
      <Login/>
    </Provider>);
    // console.log(wrapper.debug());
    // expect(wrapper.dive().instance().checkBoxChecked()).toEqual(true);
    // expect(wrapper.dive().instance().closeModal()).toReturn(mockSignupFn);
    // const form = wrapper.find('form');
    // form.simulate('submit');
    // wrapper.instance().loginSubmit() = mockSignupFn;
    // expect(wrapper.dive().instance().loginSubmit()).toContain()

    //     const spy = jest.spyOn(Login.prototype, 'componentWillReceiveProps');
    // const wrappers = mount(<Login />);
    // wrappers.instance().componentWillReceiveProps();
    // expect(spy).toHaveBeenCalled();
  });

  it('render login page correctly', () => {
    const wrapper = mount(<Login />);
    expect(wrapper.find('button').text()).toBe('LOGIN');
    expect(wrapper.find('.modal-title').text()).toBe('Welcome Back!');
    expect(wrapper.find('form input').length).toEqual(2);
  });

  it('should update states when data is passed', () => {
    const wrapper = mount(<Login />);
    const emailInput = wrapper.find('#loginEmail');
    emailInput.instance().value = 'uwahope007@gmail.com';
    emailInput.simulate('change');

    const passwordInput = wrapper.find('#loginPassword');
    passwordInput.instance().value = 'password123';
    passwordInput.simulate('change');

    expect(wrapper.state()).toMatchObject({
      email: 'uwahope007@gmail.com',
      password: 'password123',
      loginDisplay: '',
    });
    wrapper.unmount();
  });

  it('should submit inputs from the state', () => {
    const mockSignupFn = jest.fn();
    const wrapper = mount(<Login signup={mockSignupFn} />);

    const emailInput = wrapper.find('#loginEmail');
    emailInput.instance().value = 'uwahope007@gmail.com';
    emailInput.simulate('change');

    const passwordInput = wrapper.find('#loginPassword');
    passwordInput.instance().value = 'password123';
    passwordInput.simulate('change');

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(mockSignupFn.mock.calls.length).toBe(0);
    wrapper.unmount();
  });
  it("loginSubmit called on submit", () => {
    const value = "Makers Academy";
    const loginSubmit = jest.fn();
    const wrapper = mount(<Login loginSubmit={loginSubmit}/>);

    const result = wrapper.find('#submit');
    result.simulate('click');
    expect(loginSubmit.called).toBe();
  });
// 
});
