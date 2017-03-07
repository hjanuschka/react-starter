import './index.css';

import { Provider } from "react-redux"
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { fetchUsername } from './actions/loginActions';
import Routes from './routes';
import store from "./store"

injectTapEventPlugin();
store.dispatch(fetchUsername())
ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
  <Routes history={browserHistory} />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
