import React, {Component} from 'react';

const SideBar = (props) => {

    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        width: '20%',
        marginLeft: "30px",
    }
    const titleStyle = {
        display: "inline-block",
        cursor: "pointer"
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