import { useState } from 'react'

import Icon from '../Icon/Icon'

const ShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false)

  const onPasswordVisibilityChange = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="field relative">
      <label htmlFor="password">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder=""
          required
        />
        <button
          onClick={onPasswordVisibilityChange}
          className="absolute right-4 top-8"
        >
          <Icon id={showPassword ? 'eyeClosed' : 'eyeOpened'} size={32} />
        </button>
      </div>
    </div>
  )
}

export default ShowHidePassword
