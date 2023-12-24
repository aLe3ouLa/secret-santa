import { useState } from 'react'

const Hamburger = () => {
  const [isHamburger, setIsHamburger] = useState(true)

  const toggleNav = () => {
    setIsHamburger((prevValue) => !prevValue)
  }
  return (
    <button
      className="flex h-[58px] w-[68px] flex-col items-center justify-center bg-supernova"
      onClick={toggleNav}
    >
      <div
        className={`line transition-transform ${
          isHamburger ? '-translate-y-3' : 'rotate-45'
        }
        absolute`}
      />
      <div className={`line ${isHamburger ? '' : 'hidden'}`} />
      <div
        className={`line ${isHamburger ? 'translate-y-3' : '-rotate-45'}
        absolute`}
      />
    </button>
  )
}

export default Hamburger
