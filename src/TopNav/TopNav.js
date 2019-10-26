import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import header_no_pencil from '../graphics/website_header.png'
import header from '../graphics/banner_w_pencil.png'
// import Hamburger from './Hamburger.js'
import styles from '../styles.js';
import radium from 'radium';

const TopNav = (props) => {

    const optionStyle = { 
        ...styles.underlineOnHover,
        marginLeft: '15px',
        fontSize: '24px',
        '@media(max-width:400px)' : {
            fontSize: '20px'
        }
    }

    const listStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: '0 5% 0 0',
        '@media(max-width:600px)' : {
            justifyContent: 'center',
        }
    }
    const wrapper = {
        position: 'relative',
        top: '-10px',
        padding: '10px',
        marginBottom: '10px'
    }

    let text;
    let target;

    if (props.loggedIn) {
        text = "Admin Panel"
        target = "/admin"
    } else {
        text = "Login"
        target = "/login"
    }

    let sectionTitle = props.location.pathname.replace('/', '')

    try {
        sectionTitle = sectionTitle.replace(sectionTitle[0], sectionTitle[0].toUpperCase())
    } catch (err) {
        sectionTitle = ' ';
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 700) {
            document.getElementById('banner').src = header_no_pencil
        } else {
            document.getElementById('banner').src = header;
        }
    })

    return (
        <div style={wrapper}>
            <ul id="list" style={listStyle}>
                {/* <Link to="/">
                    <p
                        style={optionStyle}
                        key="home"
                        id="home"
                    >Home
            </p>
                </Link> */}

                <Link to={target}>
                    <p
                        style={optionStyle}
                        key={text}
                    >{text}
                    </p>
                </Link>

                <Link to='/about'>
                    <p
                        style={optionStyle}
                        key="about"
                    >About
            </p>
                </Link>

                <Link to='/portfolio'>
                    <p
                        style={optionStyle}
                        key="portfolio"
                    >Portfolio
            </p>
                </Link>

                <Link to='/contact'>
                    <p
                        style={optionStyle}
                        key="contact"
                    >Contact
            </p>
                </Link>
            </ul>
            <a href="/"><img
                id="banner"
                src={window.innerWidth < 600 ? header_no_pencil : header}
                style={{ marginLeft: '5%', width: '90%' }}

            /></a>
            <p style={{ textAlign: 'center', fontSize: '30px', padding: 0, margin: 0, position: 'relative'}}>{sectionTitle}</p>
        </div>)
}

export default withRouter(radium(TopNav));