/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../../../store/configureStore';

class Banner extends Component {
  render() {
    const { title, display } = this.props;
    const { token } = store.getState().loginReducer;
    return (
      <div className="row bg-cream align-left pt1 pl2 pb1 pls1 bb-grey">
        <div className="col9">
          <h1 id="thread-title" className="">{title}</h1>
        </div>
        <div className="col3">
          <div className="row pt1 pb1 ">
            {!display && token ? <Link to="/create"><button id="askQuestion" className="btn btn-success btn-md btn-shadow">
                                Ask a Question
            </button></Link> : ''
            }
          </div>
        </div>

      </div>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string,
  display: PropTypes.string,
};
export default Banner;
