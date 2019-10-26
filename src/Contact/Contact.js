import React, { Component } from "react";
import mailbox_pre from '../graphics/mailbox_pre.png';
import mailbox_post from '../graphics/mailbox_post.png';
import match from '../audio/match.wav';
import styles from '../styles.js';
import radium from 'radium';
 
class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }
    formStyle = {
    width: '600px',
    ...styles.flexColumn,
    ...styles.textBlock,
    margin: '0',
    }

    imgStyle = {
        height: '350px',
    }

    rowStyle = {
        ...styles.flexRow,
        flexWrap: 'wrap',
        marginTop: '5%'
    }

    buttonStyle = styles.button;

    submit = (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message
            })
        }

        fetch('/sendMail', options)
    }
    controlChanges = (field, e) => {
        this.setState({
            [field]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p style={styles.textBlock}>If you'd like to inquire about hiring me or purchasing a piece from the portfolio, or you just want to say hi, please use the form below. You can also connect with me on instagram: @gabe.makes.things
                </p>

                <div style={this.rowStyle}>
                    <form style={this.formStyle}>
                        <h1 style = {styles.sisterFont}>Email Gabe</h1>
                        <label for="name">Name</label>
                        <input
                            style={styles.input}
                            name="name"
                            type="text"
                            onChange={(e) => { this.controlChanges("name", e) }}
                            value={this.state.name}
                        >
                        </input>
                        <label for="email">Email</label>
                        <input
                            style={styles.input}
                            type="email"
                            name="email"
                            onChange={(e) => { this.controlChanges("email", e) }}
                            value={this.state.email}
                        >

                        </input>
                        <label for="message">Message</label>
                        <textarea
                            style={styles.input}
                            name="message"
                            rows="4"
                            cols="50"
                            onChange={(e) => { this.controlChanges("message", e) }}
                            value={this.state.message}
                        >
                        </textarea>
                        <button 
                            onClick={(e)=>{
                                this.submit(e); 
                                document.getElementById('mailbox').src = mailbox_post;
                                let sound = new Audio(match);
                                sound.play();
                                setTimeout(()=>{
                                    window.location.href="/"
                                }, 1500)
                            }}
                            type="submit"
                            style = {styles.button}
                        >
                            Submit
                        </button>
                    </form>
                    <img
                        src={mailbox_pre}
                        style={this.imgStyle}
                        id="mailbox"
                    />
                </div>
            </div>);
    }
}

export default radium(Contact);