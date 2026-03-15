import { useState } from 'react'
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'
import MySkills from './pages/MySkills'
import MyProjects from './pages/MyProjects'
import GitHubStats from './components/GitHubStats'
import Socials from './pages/Socials'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Welcome/>
      <MyProjects/>
      <MySkills/>
      <GitHubStats/>
      <Socials/> 
      <Footer/>
    </>
  )
}

export default App
