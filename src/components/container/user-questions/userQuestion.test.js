import React from 'react';
import { shallow } from 'enzyme';
import { UserQuestion, mapDispatchToProps, mapStateToProps } from './userQuestion';

describe('landing page', () => {
  const getProps = () => (
    {
      allQuestion: [
        {
          question_title: '',
          user_name: '',
        }
      ],

      user: {
        token: '',
        username: ''
      },
      loadQuestion: () => {},
      history: {
        push: jest.fn(),
      },
    }
  );
  it('snap shot', () => {
    const props = getProps(true);
    const component = shallow(<UserQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load viewQuestion', () => {
    const props = getProps();
    const component = shallow(<UserQuestion {...props}/>);
    component.instance().viewQuestion('2');
    expect(component.instance().viewQuestion).toBeDefined();
  });

  it('define mapStateToProps', () => {
    const state = { userQuestionReducer: { questions: [] } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.loadQuestion()).toBeDefined();
  });
});
