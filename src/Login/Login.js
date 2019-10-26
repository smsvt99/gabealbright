import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import radium from 'radium';
import styles from '../styles.js';

class Login extends Component {
    state = {
        username: '',
        password: '',
        serverDialogue: '',
        redirect: false
    }
    formStyle = {
        ...styles.textBlock,
        ...styles.flexColumn,
        maxWidth: '400px',
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
                    console.log(res.headers);
                    sessionStorage.setItem('token', res.headers.get('x-auth-token'))
                    this.props.logIn();
                    this.redirect();
                }
                else {
                    console.log(res.headers);
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
                    <div style={this.formStyle}>
                        <h1>Welcome</h1>
                            {this.redirector}
                            <p style={{ color: 'red' }}>{this.state.serverDialogue}</p>
                            <label for="username">Username</label>
                            <input
                                name="username"
                                style={styles.input}
                                value={this.state.username}
                                onChange={(e) => { this.controlChanges(e, 'username') }}
                                name="username"
                                type="text">
                            </input>

                            <label for="password">Password</label>
                            <input
                                name="password"
                                style={styles.input}
                                value={this.state.password}
                                onChange={(e) => { this.controlChanges(e, 'password') }}
                                name="password"
                                type="password"></input>
                            <button 
                                onClick={this.submit}
                                style={styles.button}
                                >Login</button>
                    </div>
            )
        }
    }
}

export default radium(Login);