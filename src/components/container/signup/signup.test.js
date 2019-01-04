/* eslint-disable no-undef */
import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Signup from './Signup';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);


describe('<Signup />', () => {
  it('matches the snapshoot', () => {
    const initialState = {};
    const store = mockStore(initialState);

    const wrapper = shallow(<Provider store={store}>
      <Signup/>
    </Provider>);
    expect(wrapper).toMatchSnapshot();
  });


  it('render sigup page correctly', () => {
    const wrapper = mount(<Signup />);
    expect(wrapper.find('button').text()).toBe('SIGN UP');
    expect(wrapper.find('.modal-title').text()).toBe('Join Our Community!');
    expect(wrapper.find('form input').length).toEqual(3);
  });

  it('should update states when data is passed', () => {
    const wrapper = mount(<Signup />);
    const emailInput = wrapper.find('#email');
    emailInput.instance().value = 'uwahope007@gmail.com';
    emailInput.simulate('change');

    const usernameInput = wrapper.find('#username');
    usernameInput.instance().value = 'uwahope007';
    usernameInput.simulate('change');

    const passwordInput = wrapper.find('#password');
    passwordInput.instance().value = 'password123';
    passwordInput.simulate('change');

    expect(wrapper.state()).toMatchObject({
      email: 'uwahope007@gmail.com',
      username: 'uwahope007',
      password: 'password123',
    });
    wrapper.unmount();
  });

  it('should submit inputs from the state', () => {
    const mockSignupFn = jest.fn();
    const wrapper = mount(<Signup signup={mockSignupFn} />);

    const emailInput = wrapper.find('#email');
    emailInput.instance().value = 'anasey@outlook.com';
    emailInput.simulate('change');

    const usernameInput = wrapper.find('#username');
    usernameInput.instance().value = 'anasey001';
    usernameInput.simulate('change');

    const passwordInput = wrapper.find('#password');
    passwordInput.instance().value = 'password123';
    passwordInput.simulate('change');

    const form = wrapper.find('form');
    form.simulate('submit');
    expect(mockSignupFn.mock.calls.length).toBe(1);
    wrapper.unmount();
  });
});
