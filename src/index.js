import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes';

import { Provider } from "react-redux"
import store from "./store"

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
  <Routes history={browserHistory} />
  </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
