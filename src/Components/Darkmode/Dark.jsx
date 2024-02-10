import React from 'react'
import { ReactComponent as Sun } from './Sun.svg'
import { ReactComponent as Moon } from './Moon.svg'
import './Dark.scss'

const Dark = () => {
  const setDarkMode = () => {
    document.querySelector('body').setAttribute('class', 'dark')
    localStorage.setItem('selectedTheme', 'dark')
  }

  const setLightMode = () => {
    document.querySelector('body').setAttribute('class', 'light')
    localStorage.setItem('selectedTheme', 'light')
  }
  setDarkMode()

  const selectedTheme = localStorage.getItem('selectedTheme')
  console.log(selectedTheme);
  if (selectedTheme === 'dark') {
    setDarkMode()
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      
      />
      <label className="dark_mode_label" for="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  )
}

export default Dark
