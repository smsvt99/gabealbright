import React from 'react';
import { Link } from 'react-router-dom';

const Index = (props) => {
    const indexOptionsStyle = {
        marginRight: "100px",
        float: 'right'
    }

    const loginStyle = {
        marginRight: '100px',
        position: 'absolute',
        right: '20px',
        top: '10px'
    }

    const optionStyle = {
        textAlign: 'right',
    }

        return (<div>
            <h1>GABE ALBRIGHT</h1>
            <ul style={indexOptionsStyle}>
                
                <Link to="/about" style = {{}}>
                    <h2
                        style={optionStyle}
                        className="option grower"
                    >
                        ABOUT
                    </h2>
                </Link>

                <Link to = "/portfolio">
                    <h2 
                        style={optionStyle} 
                        className="option grower" 
                    >
                        PORTFOLIO
                    </h2>
                </Link>

                <Link to = "/contact">
                    <h2 
                        style={optionStyle}
                        className="option grower" 
                    >
                        CONTACT
                    </h2>
                </Link>
            </ul>
        </div>
        )
}

export default Index;