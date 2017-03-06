import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router';
import MainStage from "../MainStage"
import logo from './logo.svg';
import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <MainStage title="Start">
      <div className={classnames('App', className)}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to={{ pathname:'/about'}}>
              About
          </Link>
        </p>
      </div>
      </MainStage>
    );
  }
}

export default App;
