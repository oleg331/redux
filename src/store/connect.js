import React, { Component } from 'react';
import store from './index';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function(ConnectedComponent) {
    return class extends Component {
      render() {
        return (
          <ConnectedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        );
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this));
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange() {
        this.forceUpdate();
      }
    };
  };
}
