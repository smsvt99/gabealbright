import React from 'react';

const Contents = (props) => {
    const rowStyle = {
        display: "flex",
        flexWrap: 'wrap',
        width: "100%",
        margin: "0px 20px",
        // border: "1px solid grey"
    }
    const imgStyle = {
        width : "150px",
        margin: "auto",
        borderRadius: '7px'
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
        marginBottom: '10px'
    }

    const media = props.media.filter((item)=>{
        return item.category === props.current
    })

    const htmlArray = media.map(obj => {
        return (
            <div style={wrapperStyle}
                className = "grower"
                onClick = {props.setBigPreviewSource}
            >
                <h2 style={{fontSize: '16px', textAlign: 'center'}}>{obj.title}</h2>
                <p style={pStyle}>{obj.year}</p>
                <img 
                    style = {imgStyle}
                    src={obj.url}
                    alt = {obj.description}
                    >
                </img>
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