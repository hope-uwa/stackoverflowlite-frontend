import React from 'react';

import { shallow } from 'enzyme';
import { SingleQuestion, mapDispatchToProps, mapStateToProps } from './singleQuestion';
// import { loadAnArticle } from '../../../actions/singlearticle/singleArticleAction';

describe('landing page', () => {
  const getProps = isLoading => (
    {
      question: {
        title: 'this is the title',
      },
      getSingleQuestion: () => {},
      anArticle: {
        isLoading,
        
      },
      relatedArticle: {
        isLoading,
        articles: [],
      },
    }
  );
  it('should show page is loading', () => {
    const props = getProps(true);
    const component = shallow(<SingleQuestion {...props}/>);
    expect(component).toMatchSnapshot();
  });
});
