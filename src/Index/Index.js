import React from 'react';
import gabe_albright from '../graphics/gabe_albright.svg'
import about from '../graphics/about.svg'
import contact from '../graphics/contact.svg'
import portfolio from '../graphics/portfolio.svg'
import king_kong from '../graphics/king_kong.svg'
import { Link } from 'react-router-dom';

const Index = (props) => {
    // const indexOptionsStyle = {
    //     marginRight: "100px",
    //     float: 'right'
    // }

    const option = {
        width: '14%',
        minWidth: '200px',
    }
    const background = {
        position: 'absolute',
        top: '20px',
        width: '100%',
        height: '90%',
        background: `url(${king_kong}) no-repeat center center`,
        backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center'
    }
    const title = {
        display: 'block',
        margin: 'auto',
        width: '28%',
        minWidth: '450px'
    }
    const buttons = {
        marginRight: '24%',
        marginTop: '3%'
    }

    return (<div style={background}>
            <img
                src={gabe_albright}
                className="cloud"
                alt="gabe albright"
                style={title}
            ></img>
        <div style={buttons}>
            <div className="cloud2">
                <Link
                    to="/about"
                >
                    <img
                        style={option}
                        src={about}
                        alt="about"
                        className="grower"
                    >
                    </img>
                </Link>
            </div>

            <div className="cloud3">
                <Link to="/portfolio">
                    <img
                        src={portfolio}
                        alt="about"
                        style={option}
                        className="grower"
                    >
                    </img>
                </Link>
            </div>

            <div className="cloud4">
                <Link to="/contact">
                    <img
                        src={contact}
                        alt="about"
                        style={option}
                        className="grower"
                    >
                    </img>
                </Link>
                {/* </div>
        </div> */}
            </div>
        </div>
    </div>
    )
}

export default Index;