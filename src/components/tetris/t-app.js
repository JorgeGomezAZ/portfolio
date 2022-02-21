document.addEventListener('DOMContentLoaded', () =>
{
    const grid = document.querySelector('.t-grid')
    let squares = Array.from(document.querySelectorAll('.t-grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')

    const width = 10

    //tetraminos
    const lTetromino = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ]

    const zTetromino = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ]

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

    const oTetromino = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ]

    const iTetromino = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ]

    const tetraminos = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currentPosition = 4
    let currentRotation = 0
    let random = Math.floor(Math.random() * tetraminos.length)
    let current = tetraminos[random][currentRotation]

    function control(e)
    {
        if (e.keyCode === 37)
        {
            moveLeft()
        } else if (e.keyCode === 38)
        {
            rotate()
        } else if (e.keyCode === 39)
        {
            moveRight()
        }
        // } else if (e.keyCode === 40) {
        //   moveDown()
        // }
    }
    document.addEventListener('keyup', control)

    const draw = () =>
    {
        current.forEach(index =>
        {
            squares[currentPosition + index].classList.add('tetraminos')
        })
    }
    const undraw = () =>
    {
        current.forEach(index =>
        {
            squares[currentPosition + index].classList.remove('tetraminos')
        })
    }

    const fall = () =>
    {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    const freeze = () =>
    {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken')))
        {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))

            random = Math.floor(Math.random() * tetraminos.length)
            current = tetraminos[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }
    const moveLeft = () =>
    {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if (!isAtLeftEdge) currentPosition -= 1
        if (current.some(index => squares[currentPosition + index].classList.contains('taken')))
        {
            currentPosition += 1
        }
        draw()
    }
    const moveRight = () =>
    {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
        if (!isAtRightEdge) currentPosition += 1
        if (current.some(index => squares[currentPosition + index].classList.contains('taken')))
        {
            currentPosition -= 1
        }
        draw()
    }

    const rotate = () =>
    {
        undraw()
        currentRotation = (currentRotation + 1) % current.length
        current = tetraminos[random][currentRotation]
        draw()
    }
    // draw()
    // let timerId = setInterval(fall, 500)

})