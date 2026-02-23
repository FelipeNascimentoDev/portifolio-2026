import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import WhoAmI from './pages/WhoAmI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Welcome/>
      <WhoAmI/>
      {/* <Routes> */}
        {/* <Route path='/' element={}></Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
