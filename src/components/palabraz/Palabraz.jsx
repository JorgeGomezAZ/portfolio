import Gameboard from './p-components/gameboard/Gameboard'
import React, { Component } from 'react'
import './palabraz.css'
import { dicc } from './../../dictionary.js'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 900,
    timerProgressBar: false
})


const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F',
    'G', 'H', 'J', 'K', 'L', 'Ñ', 'INGRESA', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<<'
]

// const wordle = 'THREE'
// const wordleGuess = ''

class Keyboard extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            colorKeys: ['#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384',
                '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384', '#818384'
            ],
            guessRows: [
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', '']
            ],
            colors: [
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', ''],
                ['', '', '', '', '']
            ],
            currentRow: 0,
            currentTile: 0,
            isGameOver: false,
            status: false
        };
    }
    aux = []

    handleClick = (letter) =>
    {

        if (this.state.isGameOver)
        {
            console.log('game over');
            return
        }
        if (letter === 'INGRESA')
        {
            if (this.state.currentTile === 5)
                this.ingresa()
            else
                Toast.fire({
                    title: 'Insuficientes Letras',
                    returnFocus: false,
                    width: '16rem'
                })
        }
        else if (letter === '<<')
        {
            if (this.state.currentTile > 0)
                this.borraLetra()
            else
                console.log('no hay letras para borrar')
        }
        else if (this.state.currentTile < 5)
        {
            this.state.guessRows[this.state.currentRow][this.state.currentTile] = letter
            this.setState({ currentTile: this.state.currentTile + 1 });
        }
        return
    }

    ingresa = () =>
    {
        const guess = this.state.guessRows[this.state.currentRow].join('')
        if (dicc.indexOf(guess) > -1)
        {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "palabra": guess
                })
            };
            fetch('http://52.250.110.162:9000/api', requestOptions).then(response => response.json())
                .then(data => this.storeData(data, guess));
        } else
        {
            Toast.fire({
                icon: 'error',
                title: 'Palabra no válida',
            })
            return
        }
        this.setState({
            currentRow: this.state.currentRow + 1,
            currentTile: 0
        });
        console.log(this.state.currentRow);
        if (this.state.currentRow === 5)
        {
            this.setState({ isGameOver: true });
            console.log('done');
        }
        return
    }
    borraLetra = () =>
    {
        this.state.guessRows[this.state.currentRow][this.state.currentTile - 1] = ''
        this.setState({ currentTile: this.state.currentTile - 1 });
        return
    }
    storeData = (data, gess) =>
    {
        console.log(data.respuestaVerdes)
        console.log(data.respuestaYellow)
        data.respuestaVerdes.forEach((c, i) =>
        {
            if (data.respuestaVerdes[i] !== '')
            {
                this.state.colors[this.state.currentRow - 1][i] = 'G'
            }
            else if (data.respuestaYellow[i] !== '')
            {
                this.state.colors[this.state.currentRow - 1][i] = 'Y'
            }
            else
            {
                this.state.colors[this.state.currentRow - 1][i] = 'B'
            }
        });
        for (let index = 0; index < keys.length; index++)
        {
            data.respuestaVerdes.forEach(element =>
            {
                if (element === keys[index])
                    this.state.colorKeys[index] = '#538d4e'
            });
            data.respuestaYellow.forEach(element =>
            {
                if (element === keys[index] && this.state.colorKeys[index] === '#818384')
                    this.state.colorKeys[index] = '#b59f3a'
            });
            gess.split("").forEach(element =>
            {
                if (element === keys[index] && this.state.colorKeys[index] === '#818384')
                    this.state.colorKeys[index] = '#3a3a3c'
            });
        }
        this.setState({ currentTile: this.state.currentTile });
    }
    render()
    {
        return (
            <div className="">
                <div className="w-game">
                    <Gameboard array={this.state.guessRows} colors={this.state.colors} />
                </div>
                <div className='k'>

                    {keys.map((k, index) => (
                        <button key={index} className='kbb' onClick={() => this.handleClick(k)} style={{ backgroundColor: this.state.colorKeys[index] }}>
                            {k}
                        </button>
                    ))}
                </div></div>
        );
    }

}


const Palabrax = () =>
{
    return (
        <div className='w'>
            <div className="w-nav">
                <div className="w-title" >PALABRAZ</div>
            </div>
            <div className="w-keyboard">
                <Keyboard />
            </div>
        </div>
    )
}

export default Palabrax