import './style.css';

import { IconButton, IconMenu, MenuItem } from 'material-ui';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, { Component } from 'react';
import { logOutUser } from '../../actions/loginActions'
import {connect} from 'react-redux';
import Base from '../Base'

class Dashboard extends Component {
  // static propTypes = {}
  logoutPress() {
    
  }
  componentDidUpdate() {
    if(!this.props.userFetched) {
      this.props.router.push('/')
    }
  }
  rightButton() {
    return (
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" onTouchTap={() => this.props.dispatch(logOutUser())} />
  </IconMenu>
    )
  }
  render() {
    const { className  } = this.props;
  
    return (
        <Base className={className} iconElementRight={this.rightButton()}>
                    
        </Base>
    );
  }
}
const mapStateToProps = (store, ownProps) => {
  console.log(store);
  return {
    user: store.login.user,
    userFetched: store.login.fetched,
    output: store.login.output,
    form: {username: null, password: null}
  };
}
export default connect(mapStateToProps)(Dashboard);