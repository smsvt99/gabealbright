import React, { Component } from "react";

class Contact extends Component {

    state = {
        name: '',
        email: '',
        message: ''
    }
    formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: "300px",
        margin: 'auto'
    }
    inputStyle = { 
        marginBottom: "20px"
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
                    <h1>Contact</h1>
                    <form style={this.formStyle}>
                        <label for="name">Name</label>
                        <input 
                            style={this.inputStyle} 
                            name="name"  
                            type="text"
                            onChange={(e)=>{this.controlChanges("name", e)}}
                            value={this.state.name}
                            >
                        </input>
                        <label for="email">Email</label>
                        <input
                             style={this.inputStyle}
                             type="email" 
                             name="email"
                             onChange={(e)=>{this.controlChanges("email", e)}}
                             value={this.state.email}
                             >

                             </input>
                        <label for="message">Message</label>
                        <textarea
                            style={this.inputStyle}
                            name="message"
                            rows="4"
                            cols="50"
                            onChange={(e)=>{this.controlChanges("message", e)}}
                            value={this.state.message}
                            >
                            </textarea>
                        <button onClick={this.submit} type="submit">Submit</button>
                    </form>
                </div>);
        }
}

export default Contact;