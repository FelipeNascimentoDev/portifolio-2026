import { useState } from 'react'
import { Route, Routes } from "react-router"
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import MySkills from './pages/MySkills'
import MyProjects from './pages/MyProjects'
import GitHubStats from './components/GitHubStats'
import Socials from './pages/Socials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Welcome/>
      <MyProjects/>
      <MySkills/>
      <GitHubStats/>
      <Socials/> 
      <Footer/>
      {/* <Routes> */}
        {/* <Route path='/' element={}></Route> */}
      {/* </Routes> */}
    </>
  )
}

export default App
