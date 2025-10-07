import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import Edit from './Edit'
import Home from './Home'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path="/edit/:userid" element={<Edit />}></Route>
            
        </Routes>
    </div>
  )
}

export default Master