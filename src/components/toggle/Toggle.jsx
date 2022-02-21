import React, { useContext } from 'react'
import './toggle.css'
import Sun from './../../img/sun.png'
import Moon from './../../img/moonIcon.png'
import { TheamContext } from '../../context'

const Toggle = () =>
{
    const theme = useContext(TheamContext)
    const handleClick = () =>
    {
        theme.dispatch({ type: "TOGGLE" })
    }
    return (
        <div className='toggle'>
            <img src={Sun} alt="" className='toggle-icon' />
            <img src={Moon} alt="" className='toggle-icon' />
            <div className="toggle-button" onClick={handleClick} style={{ left: theme.state.darkMode ? 0 : 25 }}></div>
        </div>
    )
}

export default Toggle