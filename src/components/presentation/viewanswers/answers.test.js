import React from 'react';
import { shallow } from 'enzyme';
import Answers from './answers';

describe('test answer component', () => {
  const setup = () => {
    const props = {
      answers: {
        user_name: 'hope',
        created_at: '2018-12-27T13:29:52.000Z',
        answer_body: 'this is the answer'

      },
      auth: true,
      correct: () => {}
    };
    return shallow(<Answers {...props} />);
  };
  it('should render answer', () => {
    const mockFn = jest.fn();
    const wrapper = setup();
    wrapper.find('.tooltip').simulate('click', { preventDefault() {} });
    expect(mockFn.mock.calls.length).toBe(0);
  });
});
