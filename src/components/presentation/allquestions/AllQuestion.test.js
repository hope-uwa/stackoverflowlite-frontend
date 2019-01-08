import React from 'react';
import { shallow } from 'enzyme';
import AllQuestions from './AllQuestions';


describe('test related article', () => {
  const mockFunc = jest.fn();
  const setup = () => {
    const questions = {
      questions: {
        user_name: 'hope',
        title: 'this is the title',
        question_body: 'It is very clear to me'
      },
      view: mockFunc
    };
    return shallow(<AllQuestions { ...questions }/>);
  };
  it('render Read More', () => {
    const wrapper = setup();
    expect(wrapper.find('.question__avatar-img').text()).toEqual('h');
    expect(wrapper.find('.question__content-body span').text()).toEqual('It is very clear to me');
  });

  it('click', () => {
    const wrapper = setup();
    wrapper.find('.question__content-title').simulate('click');
    expect(mockFunc.mock.calls.length).toBe(1);
  });
});
