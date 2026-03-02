import { Link } from 'react-router' // imports Link to don't reload the page when changing the path on the URL
import { useState } from 'react'
import '../style/Navbar.css'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false) //initializes the mobile menu as 'closed'

  const menuItems = ["projects", "skills", "about me", "socials"]
  
  return (
    <div className={`bg-black duration-[800ms] ease ${isMenuOpen ? "pb-44" : "pb-0"}`}>

      {/* NOT-MOBILE */}
      <div className='fixed hidden lg:flex w-full justify-center'>
        <nav className='nav-bar rounded-b-3xl p-5 lg:px-28 lg:text-2xl text-xl md:px-20'>
          <ul className='flex justify-between gap-20 font-semibold'>
            {menuItems.map((menuItem,menuItemIndex)=>(
              <li key={menuItemIndex}>
                <Link to='/'>{menuItem}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>


      {/* MOBILE DEVICES */}
      <div className='fixed lg:hidden'>

        <div className={`fixed flex flex-col text-3xl ${isMenuOpen ? "-mt-0" : "-mt-[15.3rem]"} ease duration-[1200ms]`}>
          <nav className='bg-[linear-gradient(to_bottom,gray,white)] rounded-br-2xl'>
            <ul className='grid grid-cols-1 py-5 w-screen text-black text-center font-bold'>
              {menuItems.map((menuItem,menuItemIndex)=>(
                <li key={menuItemIndex} className='py-2'>
                  <Link to='/'>{menuItem}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        
        <button className={`bg-[linear-gradient(to_bottom,white,white,gray)] px-8 py-4
        text-3xl rounded-b-2xl text-black ${isMenuOpen ? "mt-[245px]" : "-mt- font-bold"} ease duration-[1200ms]`}
        onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          ≡
        </button>
        

      </div>

    </div>  
  )
}

export default Navbar