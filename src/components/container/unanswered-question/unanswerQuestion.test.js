import React from 'react';
import { shallow } from 'enzyme';
import { UnansweredQuestion, mapDispatchToProps, mapStateToProps } from './unanswerQuestion';

describe('landing page', () => {
  const getProps = () => (
    {
      allQuestions: [
        {
          question_title: '',
          user_name: '',
        }
      ],

      loadQuestion: () => {},
      history: {
        push: jest.fn(),
      },
    }
  );
  it('snap shot', () => {
    const props = getProps(true);
    const component = shallow(<UnansweredQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load viewQuestion', () => {
    const props = getProps();
    const component = shallow(<UnansweredQuestion {...props}/>);
    component.instance().viewQuestion('2');
    expect(component.instance().viewQuestion).toBeDefined();
  });
  it('should load componentWillRecieveProps', () => {
    const props = getProps();
    const component = shallow(<UnansweredQuestion {...props}/>);
    component.instance().componentWillReceiveProps({ ...props });
    expect(component.instance().componentWillReceiveProps).toBeDefined();
  });

  it('define mapStateToProps', () => {
    const state = { allQuestionReducer: { questions: [] } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.loadQuestion()).toBeDefined();
  });
});
