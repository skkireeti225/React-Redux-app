import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { activePage } from '../actions/index';
import { reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';


class StepOne extends Component {


  static contextTypes = {
  router: PropTypes.object
  };

  onSubmit(props) {
    var page = this.props.page;
    // page.page1 = "disabled";
    // page.page2 = "active";
    this.context.router.push('/step2');
    // this.props.activePage(page);
    // this.props.createPost(props)
    //   .then(() => {
    //   });

  }

  render() {

    const { fields: { projectName, managerName, budgetAlloted, numberOfDevelopers, deadline, loaction }, handleSubmit } = this.props;

    return (
      <div className="container">

        <form role="form" onSubmit={handleSubmit(props => this.onSubmit(props))}>
              <div className="tab-content">
                  <div className="tab-pane active" role="tabpanel" id="step1">

                      <div className="step1">
                        <div className="row">
                            <div className=  {`form-group col-md-6 ${projectName.touched && projectName.invalid ? 'has-error' : ''}`}>
                              <label>Project Name:</label>
                              <input type="text" className="form-control" placeholder="Project Name" {...projectName} />
                              <div className="text-help">
                              {projectName.touched ? projectName.error : ''}
                            </div>
                          </div>

                          <div className={`form-group col-md-6 ${managerName.touched && managerName.invalid ? 'has-error' : ''}`}>
                            <label for="managerName">Manager Name:</label>
                            <input type="text" className="form-control" id="managerName" placeholder="Manager Name" {...managerName} />
                            <div className="text-help">
                            {managerName.touched ? managerName.error : ''}
                            </div>
                          </div>

                        </div>

                        <div className="row">

                          <div className={`form-group col-md-6 ${budgetAlloted.touched && budgetAlloted.invalid ? 'has-error' : ''}`}>
                            <label for="budgetAlloted">Budget alotted:</label>
                            <input type="number" className="form-control" id="budgetAlloted" placeholder="Budget alotted" {...budgetAlloted} />
                            <div className="text-help">
                            {budgetAlloted.touched ? budgetAlloted.error : ''}
                            </div>
                          </div>

                          <div className={`form-group col-md-6 ${numberOfDevelopers.touched && numberOfDevelopers.invalid ? 'has-error' : ''}`}>
                            <label for="numberOfDevelopers"> Number of Developers:</label>
                            <input type="number" className="form-control" id="numberOfDevelopers" placeholder="Number of Developers" {...numberOfDevelopers} />
                            <div className="text-help">
                            {numberOfDevelopers.touched ? numberOfDevelopers.error : ''}
                            </div>
                          </div>

                        </div>

                        <div className="row">
                          <div className={`form-group col-md-6 ${deadline.touched && deadline.invalid ? 'has-error' : ''}`}>
                            <label for="deadline"> Project Deadline:</label>
                            <input type="date" className="form-control" id="deadline" placeholder="Project Deadline" {...deadline} />
                            <div className="text-help">
                            {deadline.touched ? deadline.error : ''}
                            </div>
                          </div>

                          <div className={`form-group col-md-6 ${loaction.touched && loaction.invalid ? 'has-error' : ''}`}>
                            <label for="deadline"> Project Location:</label>
                            <input type="text" className="form-control" id="deadline" placeholder="Project Deadline" {...loaction} />
                            <div className="text-help">
                            {loaction.touched ? loaction.error : ''}
                            </div>
                          </div>

                      </div>


                      </div>
                      <ul className="list-inline pull-right">
                          <li><button type="submit" className="btn btn-primary">Save and continue</button></li>
                      </ul>

                    </div>
                </div>
          </form>


      </div>

    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.projectName) {
    errors.projectName = 'Enter a Project Name';
  }
  if (!values.managerName) {
    errors.managerName = 'Enter Manager Name';
  }
  if(!values.budgetAlloted) {
    errors.budgetAlloted = 'Enter Budget Alloted';
  }
  if(!values.numberOfDevelopers) {
    errors.numberOfDevelopers = 'Enter Number Of Developers';
  }
  if(!values.deadline) {
    errors.deadline = 'Enter Deadline';
  }
  if(!values.loaction) {
    errors.loaction = 'Enter loaction';
  }

  return errors;
}

// function mapDispatchToProps(dispatch) {
//
//   return bindActionCreators({ activePage: activePage }, dispatch);
// }
//
// function mapStateToProps(state) {
//   return {
//     page: state.activePage
//   };
// }

export default reduxForm({
  form: 'addProjectForm',
  fields: ['projectName', 'managerName', 'budgetAlloted', 'numberOfDevelopers', 'deadline', 'loaction'],
  validate
}, null, null)(StepOne);
