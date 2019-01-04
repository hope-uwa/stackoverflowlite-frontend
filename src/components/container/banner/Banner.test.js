import React from 'react';
import { shallow } from 'enzyme';
import Banner from './Banner';


describe('display banner', () => {
  const setup = () => {
    const article = {
      article: {
        featuredImg: 'xyz.jpg',
        title: 'this is the title',
        description: 'this is the description',
        content: 'It is very clear to me',
        updatedAt: '2018-12-07T10:01:09.143Z',
        likes: 5,
        User: {
          username: 'noldor',
          avatarUrl: 'noldor.jpg',
        },
      },
      read: () => {},
    };
    return shallow(<Banner />);
  };
  it('should show page is loading', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
  it('render banner component', () => {
    const wrapper = setup();

    expect(wrapper.find('#askQuestion').text()).toEqual('Ask a Question');
  });
});
