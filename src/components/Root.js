/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Sidebar from './common/sidebar/Sidebar';
import Home from './container/home/Home';

const history = createHistory();
class Root extends Component {
  render() {
    const renderData = (
      this.props.children
    );
    // console.log(typeof this.props.children)

    return (
      <div>

        <Header history= {history}/>
        <main>
          <div className="container">
            <div className="row">
              <div className="col9 colsm12  col-order2 ">
                {renderData}
              </div>
              <Sidebar/>
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
