import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Link , Redirect , withRouter, Switch } from 'react-router-dom';

import Api from 'api/api';
import {
  action,
} from './actions';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        hello
      </div>
    );
  };
}

App.propTypes = {
};

const importProps = function(state){
  return{
  }
} 

const importMethods = (dispatch) => bindActionCreators({
  action,
}, dispatch);

export default withRouter(connect(importProps , importMethods)(App));
