import React from 'react';
import { shallow } from 'enzyme';
import { PostQuestion, mapDispatchToProps, mapStateToProps } from './PostQuestion';

describe('landing page', () => {
  const getProps = () => (
    {
      success: '',
      createQuestion: () => {}
    }
  );
  it('snap shot', () => {
    const props = getProps(true);
    const component = shallow(<PostQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load viewQuestion', () => {
    const props = getProps();
    const e = {
      target: {
        value: ''
      }
    };
    const component = shallow(<PostQuestion {...props}/>);
    component.instance().handleSubmit(e);
    expect(component.instance().handleSubmit).toBeDefined();
  });
  it('should define handleInputChange', () => {
    const e = {
      target: {
        value: ''
      }
    };
    const props = getProps();
    const component = shallow(<PostQuestion {...props}/>);
    component.instance().handleInputChanges(e);
    expect(component.instance().handleInputChanges).toBeDefined();
  });

  //   Write this later
  //  it('should handle input changes successfully', () => {
  //     const wrapper = setup();
  //     wrapper.find('#answer').simulate(
  //       'change',
  //       {
  //         target: {
  //           name: 'body',
  //           value: 'this is an answer'
  //         }
  //       }
  //     );
  //     wrapper.find('#answerQuestion').simulate('click', { preventDefault() {} });
  //     expect(mockFn.mock.calls[0]).toEqual(undefined);
  //   });

  it('define mapStateToProps', () => {
    const state = { createQuestionReducer: { status: '' } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.createQuestion()).toBeDefined();
  });
});
