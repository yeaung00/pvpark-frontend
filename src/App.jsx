// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'

function App() {
  
  return (
    <div className='px-32 xl:px-64 py-2'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
