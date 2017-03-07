import './style.css';

import { Drawer, IconButton, IconMenu, MenuItem } from 'material-ui';
import {connect} from 'react-redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, {Component} from 'react';

import {logOutUser} from '../../actions/loginActions'
import Base from '../Base'

class Dashboard extends Component {
  // static propTypes = {}
  constructor(props) {
    super(props);
    this.state = {
      menu_open: false
    }
  }
  componentDidUpdate() {
    if (!this.props.userFetched) {
      this.props.router.push('/')
    }
  }
  rightButton() {
    return (
      <IconMenu iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>} targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }} anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
      }}>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out" onTouchTap={() => this.props.dispatch(logOutUser())}/>
      </IconMenu>
    )
  }
  toggleMenu() {
    this.setState({
      menu_open: !this.state.menu_open
    });
  }
  menuClose() {
    this.setState({menu_open: false});
  }
  render() {
    const {className} = this.props;

    return (
      <Base className={className} iconElementRight={this.rightButton()} onLeftIconButtonTouchTap={this.toggleMenu.bind(this)} title="Dashboard">
        <Drawer docked={false} width={200} open={this.state.menu_open} onRequestChange={(open) => this.setState({menu_open: open})}>
          <MenuItem >Menu Item</MenuItem>
          <MenuItem >Menu Item 2</MenuItem>
        </Drawer>
      </Base>
    );
  }
}
const mapStateToProps = (store, ownProps) => {
  console.log(store);
  return {userFetched: store.login.fetched};
}
export default connect(mapStateToProps)(Dashboard);