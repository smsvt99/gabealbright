import React from 'react';
import footer from '../graphics/footer.png'
import instagramIcon from '../graphics/instagramIcon.png'

const Footer = () => {
    const imgStyle = {
        width: '90%',
        marginLeft: '5%',
    }
    const pStyle = {
        textAlign: 'right',
        color: 'grey',
        marginRight: '5%'
    }
    const aStyle = {
        textDecoration: 'underline'
    }
    const iconStyle = {
        width: '40px',
        marginLeft: '10%'
    }

    return(
        <div>
            <img
                src={footer}
                style={imgStyle}
            />
            <p style={pStyle}>
                <a 
                    href="https://www.instagram.com/turkeyboots/"
                >
                    <img
                        src = {instagramIcon}
                        class="grower"
                        style = {iconStyle}
                    />
                </a>
            </p>
            <p style = {pStyle}>Built by <a style = {aStyle} href="https://www.linkedin.com/in/sean-m-stone/">Sean Stone</a></p>
        </div>
    )
}

export default Footer;