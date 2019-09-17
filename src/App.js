import React from 'react';
import './App.css';
import { connect } from './store/connect';

function App() {
  return (
    <div className="App">
      <header>
        <p>Hello world!</p>
      </header>
    </div>
  );
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
