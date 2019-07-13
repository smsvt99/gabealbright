import React from 'react';

const Contents = (props) => {
    const rowStyle = {
        display: "flex",
        flexWrap: 'wrap',
        width: "100%"
    }
    const imgStyle = {
        width : "150px",
        margin: "auto"
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
        textAlign: "center"
    }
    const htmlArray = props.content.map(obj => {
        return (
            <div style={wrapperStyle}
                className = "grower"
            >
                <h2>{obj.title}</h2>
                <img style = {imgStyle} src={obj.url} onClick = {props.setBigPreviewSource}></img>
                <p style={pStyle}>{obj.description}</p>
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

export default Contents;