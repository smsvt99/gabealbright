import React from 'react';
import {Link} from 'react-router-dom';

const TopNav = (props) => {

    const optionStyle = {
        cursor: "pointer",
        textDecoration: "underline",
        margin: '2px 10px 10px 10px'
      }

      const listStyle = {
          display: 'flex',
          padding: 0,
          margin: 0
      }
    
    let text;
    let target;

    if(props.loggedIn){
        text = "Admin Panel"
        target = "/admin"
    } else {
        text = "Login"
        target = "/login"
    }

        return(<ul style = {listStyle}>
            <Link to="/">
            <p
                style={optionStyle}
                className="option grower"
            >Home
            </p>
            </Link>

            <Link to={target}>
            <p
                style={optionStyle}
                className="option grower"
            >{text}
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


        </ul>)
        }

export default TopNav;