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
  AppBar() {
    
    if(!this.props.AppBar) {
      return ""
    }
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
     />
    )
  }
  render() {
    const { className  } = this.props;
    console.log(this.props)
    return (
        <div className={classnames('Base', className)}>
          {this.AppBar()}
          {this.props.children}
        </div>
    );
  }
}
