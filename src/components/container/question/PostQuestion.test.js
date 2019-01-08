import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ConnectedPostQuestion, { PostQuestion, mapDispatchToProps, mapStateToProps } from './PostQuestion';

const initialState = {
  createQuestionReducer: {
    message: '',
    error: '',
    status: 'true'
  }
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('landing page', () => {
  const props = {
    success: 'success',
    createQuestion: jest.fn(),
    history: {
      push: jest.fn(),
    }
  };
  const store = mockStore(initialState);

  it('snap shot', () => {
    const component = shallow(<PostQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });

  it('should load viewQuestion', async () => {
    const e = {
      target: {
        value: ''
      },
      preventDefault: jest.fn(),
    };

    const component = mount(
      <MemoryRouter>
        <ConnectedPostQuestion store={store} {...props}/>
      </MemoryRouter>
    );
    const instance = component.find('PostQuestion').instance();

    await instance.handleSubmit(e);
    expect(instance.handleSubmit).toBeDefined();
  });
  it('should define handleInputChange', () => {
    const e = {
      target: {
        value: ''
      }
    };
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
