import React from 'react';

import { shallow } from 'enzyme';
import { Home, mapDispatchToProps, mapStateToProps } from './Home';

describe('landing page', () => {
  const getProps = type => (
    {
      allQuestion: [
        {
          title: `this is the title${type}`,
        }],
      loadQuestion: () => {},
      history: {
        push: jest.fn()
      }
    }
  );

  it('should show page is loading', () => {
    const props = getProps();
    const component = shallow(<Home {...props}/>);
    expect(component).toMatchSnapshot();
  });
  it('should load componentWillRecieveProps', () => {
    const props2 = getProps('false');
    const props = getProps('true');
    const component = shallow(<Home {...props}/>);
    component.instance().componentWillReceiveProps({ ...props2 });
    expect(component.instance().componentWillReceiveProps).toBeDefined();
  });

  it('should define viewQuestion', () => {
    const props = getProps('true');
    const component = shallow(<Home {...props}/>);
    component.instance().viewQuestion();
    expect(component.instance().viewQuestion).toBeDefined();
  });

  it('define mapStateToProps', () => {
    const state = { allQuestionReducer: { questions: [] }, loginReducer: { username: '' } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.loadQuestion()).toBeDefined();
  });
});
