import React, { Component } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { test } from '../../store/selectors/selectors';
class Dashboard extends Component {

  render() {
  return(
    <div>
dashboard {this.props.test}
      </div>
  )
  }
}

const mapStateToProps =createStructuredSelector({
  test: test(),
});
export default connect(mapStateToProps)(Dashboard);
