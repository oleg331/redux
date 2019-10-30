import React, { Component } from 'react';
import './App.css';
import { connect } from './store/connect';
import UserContext from './UserContext';

class App extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    
    props.store = this.context;
  }

  render() {
    return (
      <div className="App">
        <header>
          <p>Hello world!</p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    someAction: (actionId) => {
      dispatch(toggleSomeAction(actionId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
