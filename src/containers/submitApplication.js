import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { activePage } from '../actions/index';
import { bindActionCreators } from 'redux';



class SubmitApplication extends Component {

  // componentWillMount() {
  //   var currentLocation = this.props.location.pathname;
  //   currentLocation = currentLocation.split("/").filter(function(entry) { return entry.trim() != ''; });
  //
  //   var page = {page1:"active", page2:"disabled", page3:"disabled", page4:"disabled"};
  //
  //   if (currentLocation[0] === "SubmitApplication") {
  //       page.page1="active";
  //       page.page2="disabled";
  //       page.page3="disabled";
  //       page.page4="disabled";
  //     }else if (currentLocation[0] === "step2") {
  //        page.page1="disabled",
  //        page.page2="active";
  //        page.page3="disabled";
  //        page.page4="disabled";
  //     }else if (currentLocation[0] === "step3") {
  //        page.page1="disabled";
  //        page.page2="disabled";
  //        page.page3="active";
  //        page.page4="disabled";
  //     } else if (currentLocation[0] === "completedApplication") {
  //        page.page1="disabled",
  //        page.page2="disabled";
  //        page.page3="disabled";
  //        page.page4="active";
  //     };
  //
  //   this.props.activePage(page);
  // }

  render() {
    return (
        <div className="container">
                  <div className="row">
                  	<section>
                      <div className="wizard">
                          <div className="wizard-inner">
                              <div className="connecting-line"></div>
                              <ul   className="nav nav-tabs" role="tablist">

                                  <li role="presentation" className={this.props.location.pathname === '/SubmitApplication' ? 'active' : ''}>
                                      <a data-toggle="tab" aria-controls="step1" role="tab" title="Step 1" >
                                          <span className="round-tab">
                                              <i className="glyphicon glyphicon-folder-open"></i>
                                          </span>
                                      </a>
                                  </li>

                                  <li role="presentation" className={this.props.location.pathname === '/step2' ? 'active' : ''}>
                                      <a  data-toggle="tab" aria-controls="step2" role="tab" title="Step 2">
                                          <span className="round-tab">
                                              <i className="glyphicon glyphicon-pencil"></i>
                                          </span>
                                      </a>
                                  </li>
                                  <li role="presentation" className={this.props.location.pathname === '/step3' ? 'active' : ''}>
                                      <a  data-toggle="tab" aria-controls="step3" role="tab" title="Step 3">
                                          <span className="round-tab">
                                              <i className="glyphicon glyphicon-picture"></i>
                                          </span>
                                      </a>
                                  </li>

                                  <li role="presentation" className={this.props.location.pathname === '/completedApplication' ? 'active' : ''}>
                                      <a  data-toggle="tab" aria-controls="complete" role="tab" title="Complete">
                                          <span className="round-tab">
                                              <i className="glyphicon glyphicon-ok"></i>
                                          </span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                                            <div>{this.props.children}</div>
                      </div>
                   </section>
                 </div>
              </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     page: state.activePage
//   };
// }
//
// // Anything returned from this function will end up as props
// // on the BookList container
// function mapDispatchToProps(dispatch) {
//   // Whenever selectBook is called, the result shoudl be passed
//   // to all of our reducers
//   return bindActionCreators({ activePage: activePage }, dispatch);
// }

export default connect(null, null)(SubmitApplication);
