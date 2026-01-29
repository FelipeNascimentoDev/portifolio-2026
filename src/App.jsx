import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={'componenet-here'}></Route>
      </Routes>
    </>
  )
}

export default App
