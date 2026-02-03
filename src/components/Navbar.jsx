import { Link } from 'react-router' // imports Link to don't reload the page when changing the path on the URL
import '../style/Navbar.module.css'

function Navbar() {
  return (
    <div className='fixed flex w-screen justify-center'>
      <nav className='rounded-b-3xl de p-7 bg-neutral-500 px-40 text-3xl'>
        <ul className='flex justify-between gap-40'>
          <li>
            <Link className='' to='/'> about-me</Link>
          </li>
          <li>
            <Link className='' to='/'> projects </Link>
          </li>
          <li>
            <Link className='' to='/'> skills </Link>
          </li>
          <li>
            <Link className='' to='/'> socials </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar