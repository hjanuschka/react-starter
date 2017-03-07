import './style.css';

import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import React, {Component} from 'react';
import classnames from 'classnames';

class Base extends Component {
    // static propTypes = {}
    static defaultProps = {
        AppBar: true
    }
    TopBar() {
      if (!this.props.AppBar) {
            return ""
      }
      return (<AppBar title={this.props.title} iconElementRight={this.props.iconElementRight} onLeftIconButtonTouchTap={this.props.onLeftIconButtonTouchTap}/>)
    }
    render() {
        const {className} = this.props;
        console.log(this.props)
        return (
            <div className={classnames('Base', className)}>
                {this.TopBar()}
                {this.props.children}

            </div>
        );
    }
}

const mapStateToProps = (store, ownProps) => {
    console.log(store);
    return {};
}
export default connect(mapStateToProps)(Base);
