import React from 'react';
import { shallow } from 'enzyme';
import { AnsweredQuestion, mapDispatchToProps, mapStateToProps } from './answeredQuestion';

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
      history: [],
    }
  );
  it('snap shot', () => {
    const props = getProps(true);
    const component = shallow(<AnsweredQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load viewQuestion', () => {
    const props = getProps();
    const component = shallow(<AnsweredQuestion {...props}/>);
    component.instance().viewQuestion('2');
    expect(component.instance().viewQuestion).toBeDefined();
  });
  it('should load componentWillRecieveProps', () => {
    const props = getProps();
    const component = shallow(<AnsweredQuestion {...props}/>);
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
