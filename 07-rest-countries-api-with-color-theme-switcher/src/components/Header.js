import React, { useEffect } from 'react'
import {FaMoon, FaRegMoon} from 'react-icons/fa'
import '../sass/header.scss'
import { useGlobalcontext } from '../components/context'

const Header = () => {
  const {state, dispatch} = useGlobalcontext();

  useEffect(() => {
    console.log('theme change')
  },[state.theme])

  return (
    <nav className='nav'>
        <div className="nav__title">Where in the world?</div>
        <div className="nav__theme">
        <div className="theme__icon" onClick={() => dispatch({type: 'themeChange'})}><FaRegMoon/></div>
        {
          (state.theme === 'light') && <div className="theme__title">Dark Mode</div>
        }
        {
          (state.theme === 'dark') && <div className="theme__title">Light Mode</div>
        }
        </div>
    </nav>
  )
}

export default Header