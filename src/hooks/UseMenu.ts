import { useState } from 'react'

export const useMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu(prevState => !prevState);
  }

  const handleClose = () => {
    setShowMenu(false)
  }

  return {showMenu, handleToggleMenu, handleClose}
}