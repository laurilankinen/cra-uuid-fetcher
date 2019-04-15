import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginContainer from './containers/LoginContainer';
import Uuid from './components/Uuid';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const mapStateToProps = state => ({
  ...state
});

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-6">
            <LoginContainer />
          </div>
          <div className="col-md-6">
            <Uuid data={this.props.uuid} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);