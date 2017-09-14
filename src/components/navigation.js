import React, { Component } from 'react';
import { Link } from 'react-router';

class navigation extends Component {

  componentWillMount() {
    //var currentLocation = this.props.location.pathname;
    // currentLocation = currentLocation.split("/").filter(function(entry) { return entry.trim() != ''; });

    //var mainNav = {addProject:"active", projectList:"disabled", budget:"disabled", SubmitApplication:"disabled"};

  //   if (currentLocation[0] === "SubmitApplication") {
  //       mainNav.addProject="active";
  //       mainNav.projectList="disabled";
  //       mainNav.budget="disabled";
  //       mainNav.SubmitApplication="disabled";
  //     }else if (currentLocation[0] === "step2") {
  //       mainNav.addProject="active";
  //       mainNav.projectList="disabled";
  //       mainNav.budget="disabled";
  //       mainNav.SubmitApplication="disabled";
  //     }else if (currentLocation[0] === "step3") {
  //       mainNav.addProject="active";
  //       mainNav.projectList="disabled";
  //       mainNav.budget="disabled";
  //       mainNav.SubmitApplication="disabled";
  //     } else if (currentLocation[0] === "completedApplication") {
  //       mainNav.addProject="active";
  //       mainNav.projectList="disabled";
  //       mainNav.budget="disabled";
  //       mainNav.SubmitApplication="disabled";
  //     };
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link  className="navbar-brand" to="/">Ameya Projects</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className={this.props.location.pathname === '/addProject' ? 'active' : ''}><Link to="/addProject">ADD PROJECT</Link></li>
            <li className={this.props.location.pathname === '/project-list' ? 'active' : ''}><Link to="/project-list">PROJECT LIST</Link></li>
            <li className={this.props.location.pathname === '/budget' ? 'active' : ''}><Link to="/budget">BUDGET</Link></li>
            <li className={this.props.location.pathname === '/SubmitApplication' ? 'active' : ''}><Link to="/SubmitApplication">SUBMIT APPLICATION</Link></li>
          </ul>
        </div>
        </nav>
      </div>

    );
  }
}

export default navigation;


this
