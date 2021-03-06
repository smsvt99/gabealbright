import React from 'react'

const BigPreview = (props) => {
    const imgStyle = {
        maxHeight : "90%",
        margin: 'auto',
        maxWidth : '90%'
    }
    const iframeStyle = {
        width : "80%",
        height : "90%",
        margin: 'auto',
        border: 'none',
        backgroundColor: 'black'
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
        backgroundColor: 'rgba(0,0,0,0)',
        // opacity: '0',
        color: 'rgba(255,255,255,0)',
        position: 'absolute',
        top: '0px',
        margin: '0px',
        padding: '10px 30px',
        transition: 'all .4s',
        fontSize: '18px'
    }

    let timeout;

    function showDescription(){
        // console.log('mouse moved');
        clearTimeout(timeout);
        timeout = setTimeout(hideDescription, 3500);
        document.getElementById('description').style.backgroundColor = 'rgba(0,0,0, .8)';
        document.getElementById('description').style.color = 'rgba(255,255,255, 1)';
        window.addEventListener('click', end);
    }

    function hideDescription(){
        document.getElementById('description').style.backgroundColor = 'rgba(0,0,0, 0)';
        document.getElementById('description').style.color = 'rgba(255,255,255, 0)';
    }

    function end(){
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
                {props.current !== 'video' 
                ?
                    <img 
                        style = {imgStyle} 
                        src={props.bigPreviewSource}
                    >
                    </img>
                :
                    <iframe 
                        style = {iframeStyle} 
                        src={props.bigPreviewSource}
                    >
                    </iframe>
                }
                <p id="description" style = {descriptionStyle}>{props.bigPreviewDescription}</p>
            </div>   
        </div>)
    } else {
        return null;
    }
}

export default BigPreview;