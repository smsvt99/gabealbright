import React, {Component} from 'react';
import Editor from './Editor';

class Edit extends Component{
    state = {
        editing: false,
        target: ''
    }

    edit = (id) => {
        this.setState({
            editing: true,
            target: id
        })
    }

    finishEditing = () => {
        this.setState({
            editing: false,
            target: ''
        })
    }

    cardStyle = {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 40px',
        padding: '10px',
        border: '1px solid grey',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: '20px'
    }
    

    render(){
        if(!this.state.editing){
            let media = this.props.media.sort((a,b)=>{
                return a.category - b.category
            })
            let htmlArray = media.map(item => {
                return <div style = {this.cardStyle} 
                            onClick = {() => this.edit(item._id)}
                            className = "thickener"
                        >
                    <p style={{display: 'inline-block'}}>{item.category}</p>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <h3 style={{display: 'inline-block'}} >{item.title}</h3>
                        <p style={{display: 'inline-block'}}>{item.year}</p>
                    </div>
                    <p style={{display:'inline-block'}}>{item.description}</p>
                    <img style={{width: '80px', height: '80px', display: 'inline-block'}} src={item.url}/>
                </div>
            })
        return(
        <div>
             {this.props.adminHeader('edit')}
             <div style = {{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                {htmlArray}
             </div>
        </div>
        )
        } else {
            return <Editor 
                        target = {this.state.target}
                        finishEditing = {this.finishEditing}
                        refreshContent = {this.props.refreshContent}
                    />;
        }
    }
}

export default Edit;