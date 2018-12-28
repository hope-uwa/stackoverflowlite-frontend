/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
            <div className="row bg-cream align-left pt1 pl2 pb1 pls1 bb-grey">
                <div className="col9">
                        <h1 id="thread-title" className="">Top Questions</h1>
                </div>
                <div className="col3">
                    <div className="row pt1 pb1 ">
                            <button id="askQuestion" className="btn btn-success btn-md btn-shadow">
                                Ask a Question
                            </button>
                    </div>           
                </div>
                
            </div>
    );
  }
}
export default Banner;