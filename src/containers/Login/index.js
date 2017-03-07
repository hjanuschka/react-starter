import './style.css';

import { connect } from "react-redux"
import {red500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import classnames from 'classnames';

import { fetchUsername, logOutUser,loginUser } from '../../actions/loginActions'
import Base from "../../containers/Base"

const mapStateToProps = (store, ownProps) => {
  console.log(store);
  return {
    user: store.login.user,
    userFetched: store.login.fetched,
    output: store.login.output,
    form: {username: null, password: null}
  };
}

class Login extends Component {
    componentWillMount() {
      //Check if we already have a active session
    }
    componentDidUpdate() {
      if(this.props.userFetched) {
        this.props.router.push('/dashboard')
      }
    }
    constructor(props){
      super(props);
      this.state = {
        form: {username: null, password: null}
      }
    }
    loginPress() {
        this.props.dispatch(loginUser(this.state.form))
    }
    logoutPress() {
      this.props.dispatch(logOutUser())
    }
    authedPress() {
      this.props.dispatch(fetchUsername())
      
    }
    onChange(e, newValue) {
        console.log(e.target.name)
        var newState = {...this.state};
        newState.form[e.target.name] = newValue;
        this.setState(newState)
    }
    render() {
        const style = {
            margin: 12,
            
        };
        const {
            className
        } = this.props;
        return (
            <Base title="Login" AppBar={false}>
              <Paper className={classnames('Login', className)} style={style} zDepth={1}>
                    <TextField hintText="Username" name="username" onChange={this.onChange.bind(this)}/><br/>
                    <TextField type="password"  name="password" onChange={this.onChange.bind(this)} hintText="Password"/><br/>
                    <RaisedButton label="Login" primary={true} style={style} onTouchTap={this.loginPress.bind(this)}/>
                    <RaisedButton label="Check Session" primary={true} style={style} onTouchTap={this.authedPress.bind(this)}/>
                    <RaisedButton label="Loggout" backgroundColor={red500} style={style} onTouchTap={this.logoutPress.bind(this)}/>
                    
                    Status: {this.props.output}
              </Paper>
            </Base>
        );
    }
}

export default connect(mapStateToProps)(Login);
