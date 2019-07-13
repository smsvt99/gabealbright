import React from 'react'

const BigPreview = (props) => {
    const imgStyle = {
        height : "90%",
        margin: 'auto'
    }
    
    const screenStyle = {
        height: "100%",
        width: "100%",
        position: 'fixed',
        left: '0px',
        top: '0px',
        display: 'flex',
        backgroundColor: 'rgba(0,0,0,.8',
        zIndex: 2,
    }
  
    if(props.showBigPreview)
    {
    return (
        <div id="bigPreview">
            <div id="screen" style = {screenStyle}>
                <img style = {imgStyle} src={props.bigPreviewSource}></img>
            </div>
            
        </div>
    )
    }
    else
    {
        return null;
    }
}

export default BigPreview;