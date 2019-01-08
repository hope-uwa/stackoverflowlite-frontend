/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import Headers from './common/header/Header';
import Sidebars from './common/sidebar/Sidebar';


const history = createHistory();
class Root extends Component {
  render() {
    const renderData = (
      this.props.children
    );

    return (
      <div>

        <Headers history= {history}/>
        <main>
          <div className="container">
            <div className="row">
              <div className="col9 colsm12  col-order2 ">
                {renderData}
              </div>
              <Sidebars/>
            </div>
          </div>
        </main>

        <footer className="footer  pt2 pb2 align-center">
              © Bootcamp Cycle 35
        </footer>
      </div>
    );
  }
}
Root.propTypes = {
  children: PropTypes.array.isRequired,
};


export default Root;
