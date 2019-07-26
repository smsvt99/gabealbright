import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import header from '../graphics/website_header.png'

const TopNav = (props) => {

    const optionStyle = {
        cursor: "pointer",
        // textDecoration: "underline",
        margin: '2px 10px 10px 10px',
        fontSize: '22px'
      }

      const listStyle = {
          display: 'flex',
          justifyContent: 'flex-end',
          padding: 0,
          margin: 0,
          paddingRight: '10px'

      }
      const wrapper = {
        // background: 'white',
        position: 'relative',
        top: '-10px',
        padding: '10px',
        marginBottom: '10px'
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

    let sectionTitle = props.location.pathname.replace('/', '')

    console.log(props.location.pathname[0])
    console.log(props.location.pathname[0].toUpperCase())
    try{
    sectionTitle = sectionTitle.replace(sectionTitle[0], sectionTitle[0].toUpperCase())
    } catch (err) {
        sectionTitle = ' ';
    }
        return(
        <div style={wrapper}>
        <ul style = {listStyle}>
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


        </ul>
        <img 
                src = {header}
                style = {{height: '200px', position: 'relative', top: '-20px', left: '70px'}}
            
            />
            <p style={{textAlign: 'center', fontSize: '30px', padding: 0, margin: 0, position: 'relative', top: '-40px', marginBottom: '-50px'}}>{sectionTitle}</p>
        </div>)
        }

export default withRouter(TopNav);