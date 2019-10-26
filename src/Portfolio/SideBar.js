import React, {Component} from 'react';
import Radium from 'radium';

const SideBar = (props) => {

    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        maxWidth: '150px',
        position: 'sticky',
        top: '40px',
        alignSelf: 'flex-start',
        padding: '10px',
        textAlign: 'center',
        borderRadius: '10px',
        border: '1px solid grey',
        height: '100%',
        backgroundColor: 'white',
        '@media(max-width: 400px)' : {
            padding: 0,
            textAlign: 'initial'
        }
    }
    const titleStyle = {
        fontFamily: 'Love Ya Like A Sister, cursive',
        display: "inline-block",
        cursor: "pointer",
        borderBottom: '1px solid grey',
        fontSize: '25px',
        margin: '10px',
        '@media(max-width: 400px)' : {
            fontSize: '20px'
        },
        '@media(max-width:350px)' : {
            fontSize: '16px'
        },
    };

    const categories = ["Painting", "Illustration", "Carpentry", "Sculpture", "Photography", "Video", "Other"];


    const htmlArray = categories.map(title => {
        return(<div
                key={title}
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

export default Radium(SideBar);