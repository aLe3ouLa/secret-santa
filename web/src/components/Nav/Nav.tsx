import { useState } from 'react'

import Hamburger from '../Hamburger/Hamburger'

const Nav = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }

  return (
    <>
      <div className="absolute left-6 top-6 z-10">
        <Hamburger isHamburger={isHamburger} toggleNav={toggleNav} />
      </div>
      <nav
        className={`flex max-h-screen min-h-screen w-[400px] flex-col justify-between bg-supernova px-12 pb-12 pt-[160px] ${
          isHamburger ? '-translate-x-[120%]' : 'translate-x-0'
        }`}
      >
        <ul className="top-nav">
          <li>
            <a href="#dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#event">Our Event</a>
          </li>
          <li>
            <a href="#wishlist">My Wish List</a>
          </li>
        </ul>

        <ul className="bottom-nav">
          <li className="mb-2 font-condensed text-5xl uppercase text-spanishGreen">
            Past Events
          </li>
          <li>
            <a href="#person">
              <p className="text-2xl font-bold">Smith Christmas</p>
              <p>December 21, 2023</p>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
