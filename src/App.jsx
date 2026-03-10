import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import MySkills from './pages/MySkills'
import MyProjects from './pages/MyProjects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Welcome/>
      <MyProjects/>
      <MySkills/>
      {/* <Routes> */}
        {/* <Route path='/' element={}></Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
