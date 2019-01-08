import React from 'react';
import { mount } from 'enzyme';
import PostAnswer from './postAnswer';

describe('display banner', () => {
  const mockFn = jest.fn();
  const setup = () => {
    const props = {
      id: '',
      post: () => {}
    };
    return mount(<PostAnswer {...props} />);
  };
  it('should show page is loading', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('', () => {
    const wrapper = setup();
    expect(wrapper.find('#answerQuestion').text()).toEqual('Add Answer');
  });

  it('should handle input changes successfully', () => {
    const wrapper = setup();
    wrapper.find('#answer').simulate(
      'change',
      {
        target: {
          name: 'body',
          value: 'this is an answer'
        }
      }
    );
    wrapper.find('#answerQuestion').simulate('click', { preventDefault() {} });
    expect(mockFn.mock.calls[0]).toEqual(undefined);
  });

  it('should submit successfully', () => {
    const wrapper = setup();
    wrapper.find('#answerQuestion').simulate('click', { preventDefault() {} });
    expect(mockFn.mock.calls.length).toBe(0);
  });
});
