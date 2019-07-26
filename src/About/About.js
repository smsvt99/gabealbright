import React from 'react';
import pic from '../graphics/ipsissimus.JPG'

const About = (props) => {
    const p = {
        fontSize: '22px'
    }
    const title = {
        fontFamily: 'Love Ya Like A Sister, cursive',
        fontSize: '40px'

    }
        return(
            <div style={{display: 'flex', flexWrap: 'wrap', padding: '50px', alignItems: 'center'}}>
                <img
                    src={pic}
                    style ={{
                        height: '400px',
                        width: '400px',
                        padding: '20px',
                        borderRadius: '50%'
                    }}
                    className = "grower"
                />
                <div style={{maxWidth: '60%'}}>
                    <div style={title}>Gabe Albright</div>
                    <div style={p}>I’m not a professional artist. I make my living the slow way; checking emails
and signing timesheets. But in my spare time I make art. Lots of it. I like to
experiment with different styles and mediums - you name it, I’ve tried it.
Audio, video, wood, stone, glass, legos.. I even performed an interpretive dance
once about taxonomy. This website is mostly a collection of my more recent
visual works. If you’re visiting this site it’s probably because you saw my work
somewhere. Or maybe you’re just a friend of my mom. Either way, thank you
for visiting. If you’re interested in hiring me or purchasing anything, read on.</div>
<br/>
                    <div style={title}>Artist for Hire</div>
                    <div style={p}>I make a lot of art for myself. For fun. But sometimes I get to do it for other
people. Sometimes they even pay me for it! If you’re interested in
commissioning a custom piece or hiring me for a project, please send me an
email. I love to collaborate with folks. Making a music video? Designing a tee-
shirt? Looking for twelve custom garden gnomes for an upcoming bachelorette
party? Let’s talk.
</div>
<div style={p}>Most of the paintings and photographs on this site are available as originals or
prints (prints are generally cheaper and come in a variety of sizes). If you see
anything you love, you can contact me for availability or pricing.</div>
                </div>
            </div>
        )
}

export default About;