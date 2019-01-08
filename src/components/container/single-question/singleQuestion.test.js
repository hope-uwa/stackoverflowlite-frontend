import React from 'react';

import { shallow } from 'enzyme';
import { SingleQuestion, mapDispatchToProps, mapStateToProps } from './singleQuestion';
// import { loadAnArticle } from '../../../actions/singlearticle/singleArticleAction';

describe('landing page', () => {
  const getProps = value => (
    {
      id: '',
      question: [],
      answers: [{ answer_body: '', user_name: '' }],
      preferred: [],
      postedAnswer: [{ answer_body: value }],
      getSingleQuestion: () => {},
      chooseAnswer: () => {},
      postAnswer: () => {},
      deletePost: () => {},
    }
  );
  it('should show page is loading', () => {
    const props = getProps('true');
    const component = shallow(<SingleQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should define makePreferred', () => {
    const props = getProps('true');
    const component = shallow(<SingleQuestion {...props}/>);
    component.instance().makePreferred('3', '2');
    expect(component.instance().makePreferred).toBeDefined();
  });

  it('should define deleteAction', () => {
    const props = getProps('true');
    const component = shallow(<SingleQuestion {...props}/>);
    component.instance().deleteAction();
    expect(component.instance().deleteAction).toBeDefined();
  });

  it('should load componentWillRecieveProps', () => {
    const props2 = getProps('false');
    const props = getProps('true');
    const component = shallow(<SingleQuestion {...props}/>);
    component.instance().componentWillReceiveProps({ ...props2 });
    expect(component.instance().componentWillReceiveProps).toBeDefined();
  });

  it('define mapStateToProps', () => {
    const state = { singleQuestion: { questions: [] }, postAnswerReducer: { answer: [] } };
    const myOwnProps = { match: { params: { id: '' } } };
    expect(mapStateToProps(state, myOwnProps)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.getSingleQuestion()).toBeDefined();
    expect(mapDispatchToProps.chooseAnswer()).toBeDefined();
    expect(mapDispatchToProps.postAnswer()).toBeDefined();
    expect(mapDispatchToProps.deletePost()).toBeDefined();
  });
});
