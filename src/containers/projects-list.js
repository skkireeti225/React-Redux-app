import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjetListItem from '../components/project_list_item';


class ProjectList extends Component {


  renderPosts() {
    console.log(this.props.posts);
      // return this.props.posts.map((data) => {
      //or
    return this.props.posts.all.map((data) => {
        return (
          <ProjetListItem
            key={data.key}
            data={data} />
        );
      });
    }


  render() {


    return (

      <div className="container">
        <h2 className="text-center">On Going Project Details</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Budget</th>
              <th>Manager Name</th>
              <th>No.Of Dev</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
              {this.renderPosts()}
          </tbody>
        </table>
      </div>

    );
  }
}

// function mapStateToProps(state) {
//   return { posts: state.posts.all };
// }
//
// export default connect(mapStateToProps, { fetchPosts })(ProjectList);
//
// or


export default connect((state => state))(ProjectList);
