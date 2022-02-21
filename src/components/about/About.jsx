import React from 'react'
import './about.css'
import Icon from "./../../img/icons.png"
import IPN from "./../../img/ipn.png"

function About()
{
    return (
        <div className='a' id='about'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Icon} alt="" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className="a-sub">
                    I'm always eager to learn new things and improve myself, that's why I'm very versatile on the type of work I can do.
                </p>
                <p className="a-desc">
                    Solving real problems with tecnology is what I am here to do.
                    I value honesty and good morals, doing things responsably and making the user proud to use our solutions.
                </p>
                <div className="a-school">
                    <img src={IPN} alt="" className="a-school-img" />
                    <div className="a-school-text">
                        <h4 className="a-school-title">National Polytechnic Institute</h4>
                        <div className="a-school-desc">Bachelor in Computer Systems Engineering at ESCOM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About