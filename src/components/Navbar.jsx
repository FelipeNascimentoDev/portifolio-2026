import { Link } from 'react-router' // imports Link to don't reload the page when changing the path on the URL
import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='fixed hidden md:flex w-full justify-center'>
      <nav className='nav-bar rounded-b-3xl p-5 lg:px-28 lg:text-2xl md:px-20'>
        <ul className='flex justify-between gap-20 font-semibold'>
          <li><Link to='/'>about-me</Link></li>
          <li><Link to='/'>projects</Link></li>
          <li><Link to='/'>skills</Link></li>
          <li><Link to='/'>socials</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar