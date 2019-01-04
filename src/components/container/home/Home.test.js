import React from 'react';

import { shallow } from 'enzyme';
import { Home, mapDispatchToProps, mapStateToProps } from './Home';

describe('landing page', () => {
  const getProps = isLoading => (
    {
      allQuestion: [
        {
          title: 'this is the title',
        }],
      loadQuestion: () => {},
    }
  );
  it('should show page is loading', () => {
    const props = getProps(true);
    const component = shallow(<Home {...props}/>);
    expect(component).toMatchSnapshot();
  });
});
