import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './UserContext';
import './index.css';

import App from './App';
import store from './store';

ReactDOM.render(
  <UserProvider value={store}>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
