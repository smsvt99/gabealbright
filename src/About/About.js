import React from 'react';
import pic from '../graphics/ipsissimus.JPG'
import radium from 'radium';
import styles from '../styles.js';

const About = (props) => {
    // const p = {
    //     margin: '0 auto 0 auto',
    //     fontSize: '20px',
    //     lineHeight: '1.2',
    //     padding: '20px',
    //     backgroundColor: 'rgba(255,255,255,.8)',
    //     borderRadius: '20px',
    //     border: '1px solid black',
    //     display: 'flex',
    //     maxWidth: '600px',
    //     '@media(max-width: 550px)' : {
    //         width: '350px'
    //     },
    //     '@media(max-width: 500px)' : {
    //         width: '300px'
    //     },
    //     '@media(max-width: 400px)' : {
    //         width: '250px'
    //     },
    //     '@media(max-width: 350px)' : {
    //         width: '200px'
    //     }
    // }
    const title = {
        ...styles.sisterFont,
        fontSize: '40px'
    }
    const rowStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '50px',
        margin: '0 0 0 0',
        // alignItems: 'center',
        justifyContent: 'center',
        '@media(max-width : 600px)' : {
            padding: '20px'
        }
    }
    const imgStyle = {
        height: '350px',
        width: '350px',
        padding: '20px',
        borderRadius: '50%',
        display: 'flex',
        '@media(max-width:450px)' : {
            height: '280px',
            width: '280px'
        },
        '@media(max-width:350px)' : {
            height: '250px',
            width: '250px'
        }

    }
    return (
        <div style={rowStyle}>
            <div>
                <img
                    src={pic}
                    style={imgStyle}
                />
            </div>
            <div>
                <div style={title}>Gabe Albright</div>
                <div style={styles.textBlock}>
I’m not a professional artist. I make my living the slow way; checking emails
and signing timesheets. But in my spare time I make art. Lots of it. I like to
experiment with different styles and mediums - you name it, I’ve tried it.
Audio, video, wood, stone, glass, legos.. I even performed an interpretive dance
once about taxonomy. This website is mostly a collection of my more recent
visual works. If you’re visiting this site it’s probably because you saw my work
somewhere. Or maybe you’re just a friend of my mom. Either way, thank you
for visiting. If you’re interested in hiring me or purchasing anything, read on.</div>
                <br />
                <div style={title}>Artist for Hire</div>
                <div style={styles.textBlock}>I make a lot of art for myself. For fun. But sometimes I get to do it for other
people. Sometimes they even pay me for it! If you’re interested in
commissioning a custom piece or hiring me for a project, please send me an
email. I love to collaborate with folks. Making a music video? Designing a tee-
shirt? Looking for twelve custom garden gnomes for an upcoming bachelorette
party? Let’s talk.
<br />
Most of the paintings and photographs on this site are available as originals or
prints (prints are generally cheaper and come in a variety of sizes). If you see
anything you love, you can contact me for availability or pricing.
                </div>
            </div>
        </div>
    )
}

export default radium(About);