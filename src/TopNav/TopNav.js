import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import header_no_pencil from '../graphics/website_header.png'
import header from '../graphics/banner_w_pencil.png'
import Hamburger from './Hamburger.js'


const TopNav = (props) => {

    const optionStyle = {
        cursor: "pointer",
        marginLeft: '15px',
        fontSize: '22px'
    }

    const listStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 0,
        margin: 0,
        paddingRight: '5%'

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
        if (window.innerWidth < 600) {
            document.getElementById('banner').src = header_no_pencil
        } else {
            document.getElementById('banner').src = header;
        }
    })

    return (
        <div style={wrapper}>
            <ul id="list" style={listStyle}>
                <Link to="/">
                    <p
                        style={optionStyle}
                        className="option grower"
                        id="home"
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
                id="banner"
                src={window.innerWidth < 600 ? header_no_pencil : header}
                style={{ marginLeft: '5%', width: '90%' }}

            />
            <p style={{ textAlign: 'center', fontSize: '30px', padding: 0, margin: 0, position: 'relative'}}>{sectionTitle}</p>
        </div>)
}

export default withRouter(TopNav);