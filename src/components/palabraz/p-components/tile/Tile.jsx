import React from 'react'
import './tile.css'
const Tile = (props) =>
{
    let ccc = ''
    if (props.c === 'G')
        ccc = '#538d4e'
    if (props.c === 'Y')
        ccc = '#b59f3a'
    return (
        <div className="t-tile" style={{ backgroundColor: ccc }}>{props.letter}</div>
    )
}

export default Tile