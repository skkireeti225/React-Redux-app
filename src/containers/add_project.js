import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class AddProject extends Component {

  static contextTypes = {
  router: PropTypes.object
  };

  onSubmit(props) {
    console.log(props);
    this.props.createPost(props)
      .then(() => {

         this.context.router.push('/');
      });
  }

  render() {

    const { fields: { projectName, managerName, budgetAlloted, numberOfDevelopers, deadline }, handleSubmit } = this.props;

    return (
      <div>
        <div className="container">
        <form className="add" onSubmit={handleSubmit(props => this.onSubmit(props))}>
          <h2>Add Project</h2>
          <div className={`form-group ${projectName.touched && projectName.invalid ? 'has-error' : ''}`}>
            <label>Project Name:</label>
            <input type="text" className="form-control" placeholder="Project Name" {...projectName} />
            <div className="text-help">
            {projectName.touched ? projectName.error : ''}
           </div>
          </div>

          <div className={`form-group ${managerName.touched && managerName.invalid ? 'has-error' : ''}`}>
            <label for="managerName">Manager Name:</label>
            <input type="text" className="form-control" id="managerName" placeholder="Manager Name" {...managerName} />
            <div className="text-help">
            {managerName.touched ? managerName.error : ''}
            </div>
          </div>

          <div className={`form-group ${budgetAlloted.touched && budgetAlloted.invalid ? 'has-error' : ''}`}>
            <label for="budgetAlloted">Budget alotted:</label>
            <input type="number" className="form-control" id="budgetAlloted" placeholder="Budget alotted" {...budgetAlloted} />
            <div className="text-help">
            {budgetAlloted.touched ? budgetAlloted.error : ''}
            </div>
          </div>

          <div className={`form-group ${numberOfDevelopers.touched && numberOfDevelopers.invalid ? 'has-error' : ''}`}>
            <label for="numberOfDevelopers"> Number of Developers:</label>
            <input type="number" className="form-control" id="numberOfDevelopers" placeholder="Number of Developers" {...numberOfDevelopers} />
            <div className="text-help">
            {numberOfDevelopers.touched ? numberOfDevelopers.error : ''}
            </div>
          </div>

          <div className={`form-group ${deadline.touched && deadline.invalid ? 'has-error' : ''}`}>
            <label for="deadline"> Project Deadline:</label>
            <input type="date" className="form-control" id="deadline" placeholder="Project Deadline" {...deadline} />
            <div className="text-help">
            {deadline.touched ? deadline.error : ''}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>

        </form>
      </div>
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

  return errors;
}

export default reduxForm({
  form: 'addProjectForm',
  fields: ['projectName', 'managerName', 'budgetAlloted', 'numberOfDevelopers', 'deadline'],
  validate
}, null, { createPost })(AddProject);
