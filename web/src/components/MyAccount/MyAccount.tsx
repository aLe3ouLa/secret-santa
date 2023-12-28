import { useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'

const MyAccount = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="flex items-center gap-2 text-black dark:text-white"
        onClick={() => {
          setIsOpen((prev) => !prev)
        }}
      >
        <div
          className={
            isOpen ? 'rotate-0 transform-gpu' : 'rotate-180 transform-gpu'
          }
        >
          <Icon id="chevron" />
        </div>

        <Avatar avatar="/images/avatar-06.png" alt="Avatar" />
        <div className="text-left">
          <p className="text-sm">Logged In as</p>
          <p className="text-lg font-bold">Cody Fisher</p>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="dropdown inline-block bg-white py-5 pl-4 pr-5"
          >
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="text-pastelMagenta ">
                  <Icon id="user" size={32} />
                </span>
                <p className="font-condensed text-3xl uppercase text-black">
                  My account
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pastelMagenta">
                  <Icon id="calendar" size={32} />
                </span>
                <p className="font-condensed text-3xl uppercase text-black">
                  My event
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-pastelMagenta">
                  <Icon id="logout" size={32} />
                </span>
                <p className="font-condensed text-3xl uppercase text-black">
                  Logout
                </p>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default MyAccount
