import React, { Component } from 'react';
import Tile from './../tile/Tile'
import './gameboard.css'

const Row = (props) =>
{
    return (
        <div className="r">
            {
                (props.ary[props.row]).map((letter, index) => (
                    <Tile key={index} letter={letter} c={props.colr[index]} />
                ))
            }
        </div>
    )
}



class Gameboard extends Component
{
    render()
    {
        return (
            <div className="gb">
                {
                    this.props.array.map((r, index) => (
                        <Row key={index} row={index} ary={this.props.array} colr={this.props.colors[index]} />
                    ))
                }

            </div>
        );
    }
}

export default Gameboard;