import React, {Component} from 'react';

const SideBar = (props) => {

    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        maxWidth: '20%',
        // marginLeft: "10px",
        position: 'sticky',
        top: '40px',
        alignSelf: 'flex-start',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid grey',
        height: '100%'
    }
    const titleStyle = {
        display: "inline-block",
        cursor: "pointer",
        borderBottom: '1px solid grey'

    };

    const categories = ["Painting", "Illustration", "Carpentry", "Sculpture", "Video", "Other"];


    const htmlArray = categories.map(title => {
        return(<h2
                onClick = {props.setCurrent}
                style = {titleStyle}
                className = {props.current === title.toLowerCase() ? "red grower" : "grower"}
            >{title}</h2>)
                })

        return(
            <div style = {columnStyle}>
                {htmlArray}
            </div>
        )
}

export default SideBar;