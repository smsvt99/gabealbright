import React, { Component } from 'react'

class Editor extends Component {
    state = {
        category: 'painting',
        url: '',
        title: '',
        year: '',
        description: '',
        serverDialogue: ''
    }

    componentDidMount = () => {
        //GET ONE
        const options = {
            headers: {
                'x-auth-token': sessionStorage.getItem('token')
            }
        }
        fetch(`/getOne/${this.props.target}`, options)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    category: res.category,
                    url: res.url,
                    title: res.title,
                    year: res.year,
                    description: res.description,
                })
            })
    }

    controlChange = (e, field) => {
        this.setState({
            [field]: e.target.value
        })
    }

    submit = (id) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': sessionStorage.getItem('token')
            },
            body: JSON.stringify({
                category: this.state.category,
                url: this.state.url,
                title: this.state.title,
                year: parseInt(this.state.year),
                description: this.state.description,
            })
        }
        fetch(`/update/${id}`, options)
            .then(res => this.props.refreshContent())
            .then(res => this.props.finishEditing())
    }

    delete = () => {
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': sessionStorage.getItem('token')
            }
        }
        fetch(`/delete/${this.props.target}`, options)
            .then(res => this.props.refreshContent())
            .then(res => this.props.finishEditing())
    }
    

    columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '400px'
    }
    render() {
        return (
            <div style={this.columnStyle}>
                <h1>Edit</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <img
                        style={{ width: '100px' }}
                        src={this.state.url}
                    >
                    </img>
                    <p
                        onClick={this.delete}
                        style={{ textDecoration: 'underline', color: 'red', cursor: 'pointer' }}
                    >Delete?</p>
                </div>
                <p>URL</p>
                <input
                    type="text"
                    value={this.state.url}
                    onChange={(e) => this.controlChange(e, 'url')}
                >
                </input>
                <p>Category</p>
                <select
                    value={this.state.category}
                    onChange={(e) => this.controlChange(e, 'category')}
                >
                    <option value='painting'>Painting</option>
                    <option value='illustration'>Illustration</option>
                    <option value='carpentry'>Carpentry</option>
                    <option value='sculpture'>Sculpture</option>
                    <option value='photography'>Other</option>
                    {/* <option value='video'>Video</option> */}
                    <option value='other'>Other</option>
                </select>
                <p>Title</p>
                <input
                    type="text"
                    name="Title"
                    value={this.state.title}
                    onChange={(e) => this.controlChange(e, 'title')}>
                </input>
                <p>Year</p>
                <input
                    type="number"
                    value={this.state.year.toString()}
                    onChange={(e) => this.controlChange(e, 'year')}
                >
                </input>
                <p>Description</p>
                <textarea
                    style={{ width: '400px', height: '200px' }}
                    value={this.state.description}
                    onChange={(e) => this.controlChange(e, 'description')}
                >
                </textarea>
                <p style={{ color: 'red' }}>{this.state.serverDialogue}</p>
                <button
                    onClick={() => {
                        this.submit(this.props.target)
                    }}
                    style={{ marginBottom: '50px', borderColor: 'black', color: 'white', backgroundColor: 'black', cursor: 'pointer' }}
                >Submit Changes!</button>
            </div>
        )
    }
}

export default Editor