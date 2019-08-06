import React from 'react';
// import gabe_albright from '../graphics/gabe_albright.svg'
// import about from '../graphics/about.svg'
// import contact from '../graphics/contact.svg'
// import portfolio from '../graphics/portfolio.svg'
// import king_kong from '../graphics/king_kong.svg'
import about_pre from '../graphics/about_pre.png'
import about_post from '../graphics/about_post.png'
import portfolio_pre from '../graphics/portfolio_pre.png'
import portfolio_post from '../graphics/portfolio_post.png'
import contact_pre from '../graphics/contact_pre.png'
import contact_post from '../graphics/contact_post.png'

import coinSound from '../audio/smb3_coin.wav'
import fireSound from '../audio/smb3_fireball.wav'
import tailSound from '../audio/smb3_tail.wav'


import { Link } from 'react-router-dom';

const Index = (props) => {
    // const indexOptionsStyle = {
    //     marginRight: "100px",
    //     float: 'right'
    // }

    const option = {
        width: '35%',
        minWidth: '350px',
        margin: '0px 10px'
    }
    // const background = {
    //     position: 'relative',
    //     minWidth: '100%',
    //     minHeight: '100%',
    //     // background: `url(${king_kong}) no-repeat center center`,
    //     backgroundSize: 'contain',
    //     // transform: 'scale(1.5)'
    // }
    // const title = {
    //     display: 'block',
    //     margin: 'auto',
    //     width: '28%',
    //     minWidth: '450px'
    // }
    const buttons = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        margin: '50px 0px'
    }

    let coin = new Audio(coinSound);
    let fire= new Audio(fireSound);
    let tail = new Audio(tailSound);



    return (
    // <div style={background}>
        <div style={buttons}>
            <div>
                <Link
                    to="/about"
                >
                    <img
                        id="about"
                        src={about_pre}
                        onMouseOver={()=>{
                            document.getElementById('about').src = about_post;
                            fire.play();
                        }}
                        onMouseOut={()=>{   
                            document.getElementById('about').src = about_pre;
                        }}
                        style={option}
                        alt="about"
                    >
                    </img>
                </Link>
            </div>

            <div>
                <Link to="/portfolio">
                    <img
                        id="portfolio"
                        onMouseOver={()=>{
                            document.getElementById('portfolio').src = portfolio_post;
                            coin.play();
                        }}
                        onMouseOut={()=>{   
                            document.getElementById('portfolio').src = portfolio_pre;
                        }}
                        src={portfolio_pre}
                        alt="portfolio"
                        style={option}
                    >
                    </img>
                </Link>
            </div>

            <div>
                <Link to="/contact">
                    <img
                        // src={contact}
                        id="contact"
                        onMouseOver={()=>{
                            document.getElementById('contact').src = contact_post;
                            tail.play();
                        }}
                        onMouseOut={()=>{   
                            document.getElementById('contact').src = contact_pre;
                        }}
                        src={contact_pre}
                        alt="contact"
                        style={option}
                    >
                    </img>
                </Link>
                {/* </div>
        </div> */}
            </div>
        </div>
    // </div>
    )
}

export default Index;