import React, {PropTypes, Component} from 'react';
import classnames from 'classnames';
import {Link} from 'react-router';
import MainStage from "../MainStage"
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import superagent from 'superagent'
import './style.css';

class Login extends Component {
    // static propTypes = {}
    // static defaultProps = {}
    // state = {}
    loginPress() {
        superagent
          .post('http://localhost:8100/backend/json_login')
          .send({})
          .end(function(d) {
            alert(JSON.stringify(d))
          })
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
            <MainStage title="Login" AppBar={false}>
              <Paper className={classnames('Login', className)} style={style} zDepth={1}>
                    <TextField hintText="Username"/><br/>
                    <TextField type="password" hintText="Password"/><br/>
                    <RaisedButton label="Login" primary={true} style={style} onTouchTap={this.loginPress}/>
              </Paper>
            </MainStage>
        );
    }
}

export default Login;
