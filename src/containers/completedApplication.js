import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CompletedApplication extends Component {

  render() {
    return (

      <div className="container">
        <form role="form">
          <div className="tab-pane" role="tabpanel" id="complete">
                        <div className="step44">
                            <div className="jumbotron">
                              <h1>Completed</h1>
                              <p>We will review your application and get back to you ASAP</p>
                            </div>
            </div>
          </div>
        </form>
      </div>

    );
  }
}

export default connect((state => state))(CompletedApplication);
