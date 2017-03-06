import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import MainStage from "../MainStage"

import './style.css';

export default class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <MainStage title="Demo">
      <div className={classnames('About', className)} >
      adsadsads
      </div>
      </MainStage>
    );
  }
}
