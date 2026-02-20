import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Welcome/>
      {/* <Routes> */}
        {/* <Route path='/' element={}></Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
