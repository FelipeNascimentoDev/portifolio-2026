import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import MySkills from './pages/MySkills'
import AboutMe from './pages/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Welcome/>
      <MySkills/>
      {/* <AboutMe/> */}
      {/* <Routes> */}
        {/* <Route path='/' element={}></Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
