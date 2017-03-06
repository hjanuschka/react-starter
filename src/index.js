import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Routes from './routes';

import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
  <Routes history={browserHistory} />
  </MuiThemeProvider>,
  document.getElementById('root')
);
