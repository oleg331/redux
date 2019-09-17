import React, { Component } from 'react';
import store from './index';
import { UserConsumer } from '../UserContext';

export function connect(mapStateToProps, mapDispatchToProps) {
  return ConnectedComponent => {
    return class extends Component {
      render() {
        return (
          <UserConsumer>
            {state => (
              <ConnectedComponent
                context={state}
                {...this.props}
                {...mapStateToProps(state.store.getState(), this.props)}
                {...mapDispatchToProps(state.store.dispatch, this.props)}
              />
            )}
          </UserConsumer>
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
