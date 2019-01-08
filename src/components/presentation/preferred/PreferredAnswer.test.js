import React from 'react';
import { shallow } from 'enzyme';
import PreferredAnswer from './PreferredAnswer';


describe('test preferred answer', () => {
  const setup = () => {
    const props = {
      answer: [{
        user_name: 'hope',
        created_at: '2018-12-27T13:29:52.000Z',
        answer_body: 'this is the answer'

      }]
    };
    return shallow(<PreferredAnswer {...props} />);
  };
  it('should render props', () => {
    const wrapper = setup();
    expect(wrapper.find('.answer__avatar-img').text()).toEqual('h');
    expect(wrapper.find('.answer__content-body span').text()).toEqual('this is the answer');
  });
  it('should return nothing when answer is empty', () => {
    const props = {
      answer: []
    };
    const wrapper = shallow(<PreferredAnswer {...props} />);
    expect(wrapper.find('div').text()).toEqual('');
  });
});
