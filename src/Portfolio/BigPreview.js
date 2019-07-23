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
        flexDirection: 'column',
        backgroundColor: 'rgba(0,0,0,.9)',
        zIndex: 2,
    }
    
    const descriptionStyle = {
        backgroundColor: 'black',
        opacity: '0',
        color: 'white',
        position: 'absolute',
        top: '0px',
        margin: '0px',
        padding: '10px 30px',
        transition: 'all .4s'
    }

    let timeout;

    function showDescription(){
        clearTimeout(timeout);
        timeout = setTimeout(hideDescription, 3500);
        document.getElementById('description').style.opacity = '.9';
        window.addEventListener('click', end);

    }

    function hideDescription(){
        document.getElementById('description').style.opacity = '0';
    }

    function end(){
        console.log('end')
        props.hideBigPreview();
        clearTimeout(timeout);
        window.removeEventListener('mousemove', showDescription);
        window.removeEventListener('click', end)
    }
  
    if(props.showBigPreview) {

        window.addEventListener('mousemove', showDescription);
        
    return (
        <div id="bigPreview">
            <div id="screen" style = {screenStyle}>
                <img style = {imgStyle} src={props.bigPreviewSource}></img>
                <p id="description" style = {descriptionStyle}>{props.bigPreviewDescription}</p>
            </div>   
        </div>)
    } else {
        return null;
    }
}

export default BigPreview;