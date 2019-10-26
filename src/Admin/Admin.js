import React, { Component } from 'react'; 
import Upload from './Upload';
import Edit from './Edit';
import { Redirect } from 'react-router-dom';
import styles from '../styles.js';
import radium from 'radium';

class Admin extends Component {
    state = {
        view: 'upload',
    }

    setView = (string) => {
        this.setState({
            view: string
        })
    }

    rowStyle = {
        display: 'flex',
        maxWidth: '400px',
        justifyContent: 'space-between',
        margin: 'auto'
    }
    selected = {
        ...styles.underlineOnHover,
        textDecoration: 'underline'
    }
    notSelected = {
        ...styles.underlineOnHover,
        textDecoration: 'none'
    }

    adminHeader = (view) => {
        return (<div>
            <h1>Admin</h1>
            <div style={this.rowStyle}>
                <p
                    className="option"
                    style={view === 'upload' ? this.selected : this.notSelected}
                    onClick={() => { this.setView('upload') }}>
                    Upload Content
                            </p>
                <p
                    className="option"
                    style={view === 'edit' ? this.selected : this.notSelected}
                    onClick={() => { this.setView('edit') }}>
                    Edit Content
                            </p>
            </div>
        </div>)
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to="/" />
        } else {
            if (this.state.view === 'upload') {
                return (<Upload
                    adminHeader={this.adminHeader}
                    refreshContent={this.props.refreshContent}
                    setView={this.setView}
                />)
            }
            if (this.state.view === 'edit') {
                return (<Edit
                    adminHeader={this.adminHeader}
                    media = {this.props.media}
                    refreshContent = {this.props.refreshContent}
                />)
            }
        }
    }

}

export default radium(Admin);