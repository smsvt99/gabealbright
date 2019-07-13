import React from 'react';

const About = (props) => {
    const pStyle = {
        padding: "40px"
    }
    if(props.view === "about")
    {
        return(
            <div>
                <h1>GABE ALBRIGHT</h1>
                <p style = {pStyle}>I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES I LIKE TURTLES</p>
                <p 
                    style = {props.backButtonStyle}
                    onClick = {() => props.setView("index")}
                
                >Back</p>
            </div>

        )
    }
    else
    {
        console.log(props.view)
        return null;
    }
}

export default About;