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
        height: '100%',
        backgroundColor: 'white'
    }
    const titleStyle = {
        fontFamily: 'Love Ya Like A Sister, cursive',
        display: "inline-block",
        cursor: "pointer",
        borderBottom: '1px solid grey',
        fontSize: '25px',
        margin: '10px'

    };

    const categories = ["Painting", "Illustration", "Carpentry", "Sculpture", "Photography", "Other"];


    const htmlArray = categories.map(title => {
        return(<div
                onClick = {props.setCurrent}
                style = {titleStyle}
                className = {props.current === title.toLowerCase() ? "red grower" : "grower"}
            >{title}</div>)
                })

        return(
            <div style = {columnStyle}>
                {htmlArray}
            </div>
        )
}

export default SideBar;