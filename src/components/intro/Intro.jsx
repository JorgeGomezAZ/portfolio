import React, { useContext } from 'react'
import "./intro.css"
import { TheamContext } from '../../context'
import CV from './../../cvJorgeGomez.pdf'
import RESUME from './../../resumeGomez.pdf'

function Intro()
{
    const theme = useContext(TheamContext)
    const darkMode = theme.state.darkMode
    return (
        <div className='i' id='intro'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Jorge Gomez</h1>
                    <div className='i-title'>
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Computer systems Engineer</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        This is my personal website. You can look at some personal projects I have done and contact me for any aditional info.
                    </p>
                    <div className="i-icons">
                        <a href="https://github.com/JorgeGomezAZ" style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-github fa-2x"></i>
                        </a>
                        <a href="https://www.facebook.com/arturo120" style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/jorgegomezaz/" style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-linkedin fa-2x"></i>
                        </a>
                        <a href="https://www.instagram.com/jorge_az_/" style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noreferrer'>
                            <i class="fa-brands fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>

            </div>
            <div className='i-right'>
                <div className="i-info">
                    <h2 className="i-info-item">
                        <a href={CV} style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noopener noreferrer'>
                            <i class="fa-regular fa-file-pdf fa-2x"></i>CV Spanish
                        </a>
                    </h2>
                    <h2 className="i-info-item">
                        <a href={RESUME} style={{ color: darkMode ? 'white' : 'black' }} target="_blank" rel='noreferrer'>
                            <i class="fa-regular fa-file-pdf fa-2x"></i>Resume English
                        </a>
                    </h2>
                </div>

                <div className="i-bg"></div>
                {/* <img src={Me} alt="" className="i-image" /> */}
            </div>
        </div>
    )
}

export default Intro