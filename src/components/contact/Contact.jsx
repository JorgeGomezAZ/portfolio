import React, { useRef, useState, useContext } from 'react'
import './contact.css'
import Phone from './../../img/phoneIcon.png'
import Mail from './../../img/mailIcon.png'
// import Map from './../../img/locationIcon.png'
import emailjs from '@emailjs/browser';
import { TheamContext } from '../../context'


const Contact = () =>
{
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(TheamContext)
    const darkMode = theme.state.darkMode
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        emailjs.sendForm('service_jm3yb5v', 'template_qsu8u4d', formRef.current, 'user_9BSixfll1DEHVUR27JUZr')
            .then((result) =>
            {
                console.log(result.text);
                setDone(true)
            }, (error) =>
            {
                console.log(error.text);
            });
    }
    return (
        <div className='c' id='contact'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                            +52 742 112 1201
                        </div>
                        <div className="c-info-item">
                            <img src={Mail} alt="" className='c-icon' />
                            gomez.arturo121@gmail.com
                        </div>
                        {/* <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                            +52 742 112 1201
                        </div> */}
                    </div>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} type="text" placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} type="text" placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} type="text" placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} name="message" id="" rows="5" placeholder='Message'></textarea>
                        <button className='c-button'>Send</button>
                        {done && "Thank you"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact