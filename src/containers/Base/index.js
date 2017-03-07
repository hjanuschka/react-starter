import './style.css';

import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import classnames from 'classnames';

export default class Base extends Component {
  // static propTypes = {}
  static defaultProps = {
    AppBar: true
  }
  // state = {}
  TopBar() {
    
    if(!this.props.AppBar) {
      return ""
    }
    return (
      <AppBar
        title={this.props.title}
        iconElementRight={this.props.iconElementRight}
     />
    )
  }
  render() {
    const { className  } = this.props;
    console.log(this.props)
    return (
        <div className={classnames('Base', className)}>
          {this.TopBar()}
          {this.props.children}
        </div>
    );
  }
}
