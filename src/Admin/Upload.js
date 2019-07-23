import React, {Component} from 'react';

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
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '400px'
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
                <p>URL</p>
                <input
                    type="text"
                    value={this.state.url}
                    onChange={(e)=>this.controlChange(e,'url')}
                    >      
                </input>
                <p>Category</p>
                <select
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
                <p>Title</p>
                <input 
                    type="text" 
                    name="Title"
                    value={this.state.title}
                    onChange={(e)=>this.controlChange(e,'title')}>
                </input>
                <p>Year</p>
                <input
                    type = "number"
                    value={this.state.year}
                    onChange={(e)=>this.controlChange(e,'year')}
                    >              
                </input>
                <p>Description</p>
                <textarea 
                    style = {{width: '400px', height: '200px'}}
                    value={this.state.description}
                    onChange={(e)=>this.controlChange(e,'description')}
                    >
                </textarea>
                <p style={{color:'red'}}>{this.state.serverDialogue}</p>
                <button 
                    onClick = {this.submit}
                    style = {{marginBottom: '50px', borderColor: 'black', color: 'white', backgroundColor: 'black', cursor: 'pointer'}}
                    >Upload!</button>
            </div>
            )
    }
}

export default Upload;