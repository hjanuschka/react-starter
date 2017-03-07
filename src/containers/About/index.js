import './style.css';

import React, { Component } from 'react';
import classnames from 'classnames';

import Base from "../Base"

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className } = this.props;
    return (
      <Base title="Demo">
      <div className={classnames('About', className)} >
      adsadsads
      </div>
      </Base>
    );
  }
}
