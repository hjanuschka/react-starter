import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';
import Base from "../../containers/Base"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import superagent from 'superagent'
import {red500} from 'material-ui/styles/colors';
import './style.css';

class Login extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    state = {
      username: "",
      password: "",
      output: "INIT"
    }
    
    constructor(props){
      super(props);
    
      this.loginPress = this.loginPress.bind(this);
      this.authedPress = this.authedPress.bind(this);
      this.logoutPress = this.logoutPress.bind(this);
      this.usernameChange = this.usernameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.authedPress()
    }
    loginPress() {
        var self = this;
        superagent
          .post('http://localhost:8100/backend/login_json')
          .withCredentials()
          .query({username: self.state.username, password: self.state.password})
          .end(function(err, d) {
            if(err) {
              self.setState({output: "Failed"});
              return;
            }
            self.setState({output: "Success - " + self.state.username});
            console.log(d);
            console.log(self.state)
          })
    }
    logoutPress() {
      var self = this;
      superagent
        .get('http://localhost:8100/logout')
        .withCredentials()
        .end(function(err, d) {
          console.log(d);
          self.setState({output: "Logged out"});
        })
    }
    authedPress() {
      var self = this;
      superagent
        .get('http://localhost:8100/backend/login_name')
        .withCredentials()
        .end(function(err, d) {
          if(!d.body) {
            self.setState({output: "ERROR"});
            return;
          }
          self.setState({output: "Logged in as: " + d.body.username});
          console.log(d);
        })
    }
    usernameChange(event, newValue) {
        console.log(event.target.value)
        this.setState({username: newValue});
    }
    passwordChange(event, newValue) {
        console.log(event.target.value)
        this.setState({password: newValue});
    }
    render() {
        const style = {
            margin: 12,
            
        };
        const {
            className,
            ...props
        } = this.props;
        return (
            <Base title="Login" AppBar={false}>
              <Paper className={classnames('Login', className)} style={style} zDepth={1}>
                    <TextField hintText="Username" value={this.state.username} onChange={this.usernameChange}/><br/>
                    <TextField type="password" value={this.state.password} onChange={this.passwordChange} hintText="Password"/><br/>
                    <RaisedButton label="Login" primary={true} style={style} onTouchTap={this.loginPress}/>
                    <RaisedButton label="Check Session" primary={true} style={style} onTouchTap={this.authedPress}/>
                    <RaisedButton label="Loggout" backgroundColor={red500} style={style} onTouchTap={this.logoutPress}/>
                    
                    Status: {this.state.output}
              </Paper>
            </Base>
        );
    }
}

export default Login;
