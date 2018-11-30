/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Header from "./common/Header";
import Home from "./container/Home";

class Root extends Component {
  render() {
    const renderData = (
      this.props.children
    );
    // console.log(typeof this.props.children)
    
    return (
      <div>
    
      <Header />
        {renderData}
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
