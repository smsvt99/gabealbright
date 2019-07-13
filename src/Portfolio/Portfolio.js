import React, { Component } from 'react';
import Contents from './Contents';
import SideBar from "./SideBar";
import BigPreview from "./BigPreview";

const paintings = require('./media/paintings.json');

class Portfolio extends Component {
    state = {
        content: paintings,
        current: "painting",
        bigPreviewSource : "",
        showBigPreview : false
    }

    rowStyle = {
        display: 'flex',
        width: "100%"
    }

    setCurrent = (e) => {
        this.setState({
            current : e.target.innerHTML.toLowerCase()
        })
    }

    setBigPreviewSource = (e) => {
        this.setState({
            bigPreviewSource : e.target.src,
            showBigPreview : true
        }, ()=>{
            document.getElementById('bigPreview').addEventListener('click', this.hideBigPreview)
            console.log(this.state.bigPreviewSource)
        })
    }

    hideBigPreview = () => {
        this.setState({
            showBigPreview : false
        })
    }

    render() {
        if(this.props.view === "portfolio")
        {
            return (
                <div>
                    <h1>PORTFOLIO</h1>
                    <BigPreview
                        bigPreviewSource = {this.state.bigPreviewSource}
                        showBigPreview = {this.state.showBigPreview}
                        hidBigPreview = {this.state.hideBigPreview}
                    />
                    <div style={this.rowStyle}>
                        <SideBar
                            current={this.state.current}
                            setCurrent={this.setCurrent}
                        />
                        <Contents
                            content={this.state.content}
                            current={this.state.current}
                            setBigPreviewSource={this.setBigPreviewSource}
                        />
                    </div>
                    <p 
                        style = {this.props.backButtonStyle}
                        onClick = {() => this.props.setView("index")}
                    >Back</p>
                </div>
            )
        }
        else
        {
            return null;
        }
    }
}

export default Portfolio;