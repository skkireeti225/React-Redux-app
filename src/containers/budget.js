import React, { Component } from 'react';
import { connect } from 'react-redux';

import  BudgetGraph from '../components/budget_graph';


class Budget extends Component {

    renderPosts(){
          if (this.props.share) {
            return (
              <BudgetGraph data = {this.props.share.pieData}/>
            )
          }
    }
  	render() {
        return (
          <div>{this.renderPosts()}</div>
        );
      }
}

function mapStateToProps(state) {
  return { share: state.posts.share };
}

export default connect(mapStateToProps)(Budget);
