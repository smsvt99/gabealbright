import React from 'react';
import Radium from 'radium';

const Contents = (props) => {
    const rowStyle = {
        display: "flex",
        flexWrap: 'wrap',
        width: "100%",
        margin: "0px 20px", 
    }
    const imgStyle = {
        width : "160px",
        margin: "auto",
        borderRadius: '7px',
        border: 'none',
        pointerEvents: 'none',
       
    }
    const wrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin : "25px",
        width: "200px",
        cursor: 'pointer',
    }

    const pStyle = {
        textAlign: "center",
        marginTop: '-10px',
        marginBottom: '10px',
        ':hover': {
            opacity: '.5'
        }
    }

    const media = props.media.filter((item)=>{
        return item.category === props.current
    })

    const htmlArray = media.map((obj, index) => {
        return (
            <div style={wrapperStyle}
                className = "grower"
                onClick = {props.setBigPreviewSource}
                key={index}
            >
                <h2 style={{fontSize: '18px', textAlign: 'center'}}>{obj.title}</h2>
                <p key={index} style={pStyle}>{obj.year}</p>
                {props.current !== 'video' ?
                <img 
                    style = {imgStyle}
                    src={obj.image.src}
                    alt = {obj.description}
                    >
                </img>
                : 
                <iframe
                    style = {imgStyle}
                    src={obj.url}
                    name = {obj.description}
                ></iframe>
                }
            </div>
        )
    })
    return(
        <div>
            <div style = {rowStyle}>
                {htmlArray}
            </div>
        </div>
    )
}
export default Radium(Contents);