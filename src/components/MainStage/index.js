import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import AppBar from 'material-ui/AppBar';

import './style.css';

export default class MainStage extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('MainStage', className)}>
          <AppBar
           title={this.props.title}
           iconClassNameRight="muidocs-icon-navigation-expand-more"
         />
          {this.props.children}
        </div>
    );
  }
}
