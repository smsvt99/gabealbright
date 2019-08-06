import React from 'react'

const BigPreview = (props) => {
    const imgStyle = {
        height : "90%",
        margin: 'auto'
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
        console.log('mouse moved');
        clearTimeout(timeout);
        timeout = setTimeout(hideDescription, 3500);
        document.getElementById('description').style.opacity = '.9';
        window.addEventListener('click', end);

    }

    function hideDescription(){
        document.getElementById('description').style.opacity = '0';
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