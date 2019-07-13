import React from 'react';

const Index = (props) => {
    const indexOptionsStyle = {
        marginRight: "100px",
        float: 'right'
    }

    const optionStyle = {
        textAlign: 'right',
    }
    if(props.view === 'index')
    {
        return(<div>
                <h1>GABE ALBRIGHT</h1>
                <ul style={indexOptionsStyle}>
                    <h2 style = {optionStyle} className="option grower" onClick = {()=>props.setView("about")}>ABOUT</h2>
                    <h2 style = {optionStyle} className="option grower" onClick = {()=>props.setView("portfolio")}>PORTFOLIO</h2>
                    <h2 style = {optionStyle} className="option grower" onClick = {()=>props.setView("contact")}>CONTACT</h2>
                </ul>
            </div>
        )
    }
    else
    {
        return null;
    }
}

export default Index;