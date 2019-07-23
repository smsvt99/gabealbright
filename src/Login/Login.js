import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: '',
        serverDialogue: '',
        redirect: false
    }
    wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: "300px",
        margin: 'auto'
    }
    controlChanges = (e, field) => {
        this.setState({
            [field]: e.target.value
        })
    }

    redirect = () => {
        this.setState({
            redirect: true
        })
    }
    componentWillUnmount = () => {
        this.setState({
            redirect: false
        })
    }

    submit = () => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }

        fetch('/login', options)
            .then(res => {
                // try{
                if (res.headers.has('x-auth-token')) {
                    sessionStorage.setItem('token', res.headers.get('x-auth-token'))
                    this.props.logIn();
                    this.redirect();
                }
                else {
                    this.setState({
                        serverDialogue: "Authentication Failed"
                    })
                }
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/admin" />
        } else {
            return (
                <div>
                    <h1>Log in</h1>
                    <div style={this.wrapperStyle}>
                        {this.redirector}
                        <p style={{ color: 'red' }}>{this.state.serverDialogue}</p>
                        <p>Username</p>
                        <input
                            value={this.state.username}
                            onChange={(e) => { this.controlChanges(e, 'username') }}
                            name="username"
                            type="text">
                        </input>

                        <p>Password</p>
                        <input
                            value={this.state.password}
                            onChange={(e) => { this.controlChanges(e, 'password') }}
                            name="password"
                            type="password"></input>
                        <p><button onClick={this.submit}>Login</button></p>
                    </div>
                </div>
            )
        }
    }
}

export default Login;