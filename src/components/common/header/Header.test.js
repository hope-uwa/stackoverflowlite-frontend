// import React from 'react';
// import { shallow, mount } from 'enzyme';
import { mapDispatchToProps, mapStateToProps } from './Header';

describe('load sidebar', () => {
//   const getProps = () => (
//     {
//       history: [],
//       signup: () => {},
//       login: () => {},
//       userInfo: { username: 'uwa' }
//     }
//   );
//   it('snap shot', () => {
//     const props = getProps(true);
//     const component = mount(<Header {...props}/>);
//     expect(component).toMatchSnapshot();
//   });

//   it('should load componentWillRecieveProps', () => {
//     const props = getProps();
//     const component = shallow(<Header {...props}/>);
//     component.instance().componentWillReceiveProps({ ...props });
//     expect(component.instance().componentWillReceiveProps).toBeDefined();
//   });

  it('define mapStateToProps', () => {
    const state = { userInfo: { user: '' } };
    expect(mapStateToProps(state)).toBeDefined();
  });
  it('define mapDispatchToProps', () => {
    expect(mapDispatchToProps).toBeDefined();
    expect(mapDispatchToProps.login()).toBeDefined();
    expect(mapDispatchToProps.signup()).toBeDefined();
    expect(mapDispatchToProps.logout()).toBeDefined();
  });
});
