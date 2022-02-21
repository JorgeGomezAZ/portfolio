import React, { Component, useState, useEffect } from 'react';
import './tetris.css'
import './t-app.js'

const Grid = () =>
{
    return (
        <div className="t-grid">
            {[
                ...Array(200),
            ].map((value, index) => (
                <div key={index}></div>
            ))}

            {[
                ...Array(10),
            ].map((value, index) => (
                <div className='taken' key={index}></div>
            ))}
        </div>
    )
}

class Tetris extends Component
{

    render()
    {
        return (
            <div className='t'>
                <h3 className="t-score">Score:
                    <span id='score'>0</span>
                </h3>
                <button className='t-start-button' id='start-button'>Start/Pause</button>
                <Grid />
            </div>
        );
    }
}

export default Tetris;