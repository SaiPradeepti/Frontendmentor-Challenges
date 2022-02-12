import React, { useEffect } from 'react'
import {FaMoon, FaRegMoon} from 'react-icons/fa'
import '../sass/header.scss'
import { useGlobalcontext } from '../components/context'
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const {state, dispatch} = useGlobalcontext();
  const navigate = useNavigate();
  useEffect(() => {
    console.log('theme change')
  },[])

  return (
    <nav className={`nav ${state.theme === 'dark'? 'darkTheme' : ''}`}>
        <div className="nav__title" onClick={() => navigate('/')}>Where in the world?</div>
        <div className="nav__theme">
        {
          (state.theme === 'light') && <div className="theme__icon" onClick={() => dispatch({type: 'themeChange'})}><FaRegMoon/></div>
        }
        {
          (state.theme === 'dark') && <div className="theme__icon" onClick={() => dispatch({type: 'themeChange'})}><FaMoon/></div>
        }
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