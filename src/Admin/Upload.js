import React, {Component} from 'react';
import styles from '../styles.js';
import radium from 'radium';

class Upload extends Component{

    state = {
        category: 'painting',
        url: '',
        title: '',
        year: '',
        description: '',
        serverDialogue: ''
    }

    columnStyle = {
        ...styles.textBlock,
        ...styles.flexColumn,
    }

    controlChange = (e, field) =>{
        this.setState({
            [field]: e.target.value
        })
    }

    submit =  async () => {
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
                year: this.state.year,
                description: this.state.description,
            })
        }
        const fetcher = await fetch('/upload', options);
        const newContent = await this.props.refreshContent();
        const edit = await this.props.setView('edit');
    }

    render(){
        return (
            <div style={this.columnStyle}>
                {this.props.adminHeader('upload')}
                <img
                    style={{width : '100px'}}
                    src={this.state.url}
                >
                </img>
                <label for="url">URL</label>
                <input
                    name="url"
                    type="text"
                    value={this.state.url}
                    onChange={(e)=>this.controlChange(e,'url')}
                    style={styles.input}
                    >      
                </input>
                <label for="category">Category</label>
                <select
                    name="category"
                    style={styles.input}
                    value={this.state.category}
                    onChange={(e)=>this.controlChange(e,'category')}
                >
                    <option value='painting'>Painting</option>
                    <option value='illustration'>Illustration</option>
                    <option value='carpentry'>Carpentry</option>
                    <option value='sculpture'>Sculpture</option>
                    <option value='video'>Video</option>
                    <option value='other'>Other</option>
                </select>
                <label for="Title">Title</label>
                <input 
                    style={styles.input}
                    type="text" 
                    name="Title"
                    value={this.state.title}
                    onChange={(e)=>this.controlChange(e,'title')}>
                </input>
                <label for="year">Year</label>
                <input
                    name="year"
                    style={styles.input}
                    type = "number"
                    value={this.state.year}
                    onChange={(e)=>this.controlChange(e,'year')}
                    >              
                </input>
                <label>Description</label>
                <textarea 
                    name="description"
                    style={styles.input}
                    value={this.state.description}
                    onChange={(e)=>this.controlChange(e,'description')}
                    >
                </textarea>
                <p style={{color:'red'}}>{this.state.serverDialogue}</p>
                <button 
                    onClick = {this.submit}
                    style = {styles.button}
                    >Upload!</button>
            </div>
            )
    }
}

export default Upload;