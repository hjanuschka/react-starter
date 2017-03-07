import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Base from "../Base"

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <Base title="Demo">
      <div className={classnames('About', className)} >
      adsadsads
      </div>
      </Base>
    );
  }
}
