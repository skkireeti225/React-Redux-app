import React, { Component } from 'react';


import Navigation from './navigation';
import Footer from './footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation location={this.props.location} ></Navigation>
          {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}
