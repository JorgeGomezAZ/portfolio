import React from 'react'
import Portfolio from './Portfolio'
import { Route, Routes } from "react-router-dom";
import Palabraz from './Palabraz';
import Tetris from './components/tetris/Tetris';

function App()
{
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/palabraz' element={<Palabraz />} />
        <Route path='/tetris' element={<Tetris />} />
        {/* <Route path="*" element={<Portfolio />} /> */}
      </Routes>
    </div>
  )
}

export default App