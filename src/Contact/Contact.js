import React, { Component } from "react";
import mailbox_pre from '../graphics/mailbox_pre.png';
import mailbox_post from '../graphics/mailbox_post.png';
import match from '../audio/match.wav'


class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }
    formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: "350px",
        backgroundColor: 'white',
        padding: '30px',
        border: '1px solid grey',
        borderRadius: '10px',
        flexWrap: 'wrap',
    }
    inputStyle = {
        marginBottom: "20px",
        resize: "none",
        fontSize: '16px',
        maxWidth: "100%"
    }
    imgStyle = {
        height: '350px',
        display: 'flex'
    }
    rowStyle = {
        display: 'flex',
        justifyContent: "space-around",
        marginTop: "50px",
        maxWidth: '800px',
        flexWrap: 'wrap',
        margin: 'auto'
    }
    pStyle = {
        // margin: '1% 5% 50px 5%',
        fontSize: '24px',
        lineHeight: '1.5',
        padding: '20px',
        backgroundColor: 'rgba(255,255,255,.8)',
        borderRadius: '20px',
        border: '1px solid grey',
        maxWidth: '800px',
        margin: 'auto',
        marginBottom: '35px'
    }

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
                <p style={this.pStyle}>If you'd like to inquire about hiring me or purchasing a piece from the portfolio, or you just want to say hi, please use the form below. You can also connect with me on instagram: @gabe.makes.things
                </p>

                <div style={this.rowStyle}>
                    <form style={this.formStyle}>
                        <h1>Email Gabe</h1>
                        <label for="name">Name</label>
                        <input
                            style={this.inputStyle}
                            name="name"
                            type="text"
                            onChange={(e) => { this.controlChanges("name", e) }}
                            value={this.state.name}
                        >
                        </input>
                        <label for="email">Email</label>
                        <input
                            style={this.inputStyle}
                            type="email"
                            name="email"
                            onChange={(e) => { this.controlChanges("email", e) }}
                            value={this.state.email}
                        >

                        </input>
                        <label for="message">Message</label>
                        <textarea
                            style={this.inputStyle}
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
                            style = {{cursor: 'pointer', fontSize:'16px'}}
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

export default Contact;