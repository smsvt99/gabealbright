import React, { Component } from 'react';
import Contents from './Contents';
import SideBar from "./SideBar";
import BigPreview from "./BigPreview";

// const paintings = require('./media/paintings.json');

class Portfolio extends Component {
    state = {
        // content: paintings,
        current: "painting",
        bigPreviewSource : "",
        bigPreviewDescription : "",
        showBigPreview : false,
        content : []
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
        let realTarget = e.target.parentElement.lastChild
        if(!realTarget.src) {
            realTarget = e.target.lastChild
        }
        console.log(realTarget)
        this.setState({
            bigPreviewSource : realTarget.src,
            bigPreviewDescription : realTarget.alt,
            showBigPreview : true
        })
    }

    hideBigPreview = () => {
        this.setState({
            showBigPreview : false
        })
    }

    render() {
            return (
                <div>
                    <h1 className = "header">Portfolio</h1>
                    <BigPreview
                        bigPreviewSource = {this.state.bigPreviewSource}
                        bigPreviewDescription = {this.state.bigPreviewDescription}
                        showBigPreview = {this.state.showBigPreview}
                        hideBigPreview = {this.hideBigPreview}
                    />
                    <div style={this.rowStyle}>
                        <SideBar
                            current={this.state.current}
                            setCurrent={this.setCurrent}
                        />
                        <Contents
                            media={this.props.media}
                            current={this.state.current}
                            setBigPreviewSource={this.setBigPreviewSource}
                        />
                    </div>
                </div>
            )
        }
}

export default Portfolio;