import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar, mapDispatchToProps, mapStateToProps } from './Sidebar';

describe('load sidebar', () => {
  const getProps = () => (
    {
      userInfo: {
        username: '',
        token: false
      },
      questions: [{
        question_title: ''
      },
      {
        question_title: ''
      }],
      userQuestionLength: 3,
      loadQ: () => {},
      loadUQ: () => {}
    }
  );
  it('snap shot', () => {
    const props = getProps(true);
    const component = shallow(<Sidebar {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load componentWillRecieveProps', () => {
    const props = getProps();
    const component = shallow(<Sidebar {...props}/>);
    component.instance().componentWillReceiveProps({ ...props });
    expect(component.instance().componentWillReceiveProps).toBeDefined();
  });

  it('define mapStateToProps', () => {
    const state = { allQuestionReducer: { questions: [] }, userInfo: { user: '' } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.loadQ()).toBeDefined();
  });
});
