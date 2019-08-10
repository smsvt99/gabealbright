import React from 'react';
import { Link } from 'react-router-dom';


const Hamburger = (props) => {
    const listStyle = {
        display: 'flex',
        flexDirection: 'column'
    }
    const optionStyle = {
        color: 'red'
    }
    return (
        <div>
        <ul id="list" style={listStyle}>
                <Link to="/">
                    <p
                        style={optionStyle}
                        className="option grower"
                        id="home"
                    >Home
            </p>
                </Link>

                <Link to={props.target}>
                    <p
                        style={optionStyle}
                        className="option grower"
                    >{props.text}
                    </p>
                </Link>

                <Link to='/about'>
                    <p
                        style={optionStyle}
                        className="option grower"
                    >About
            </p>
                </Link>

                <Link to='/portfolio'>
                    <p
                        style={optionStyle}
                        className="option grower"
                    >Portfolio
            </p>
                </Link>

                <Link to='/contact'>
                    <p
                        style={optionStyle}
                        className="option grower"
                    >Contact
            </p>
                </Link>
                </ul>
            </div>
    )
}

export default Hamburger;