import React from 'react'
import { Route, Routes } from "react-router-dom";
import Palabraz from './Palabraz';

function App()
{
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Palabraz />} />
        <Route path='/palabraz' element={<Palabraz />} />
      </Routes>
    </div>
  )
}

export default App