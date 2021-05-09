import React, { useState } from 'react'
import '../scss/main.scss'
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi"

const App = () => {
  const [lightTheme,setLightTheme] = useState(false);
  return (
    <div className={`app ${lightTheme ? 'lightTheme' : 'darkTheme'}`}>
      <div className="app__header">
        <div className="app__title">todo</div>
        <div className="app__darkTheme" onClick={()=>setLightTheme(!lightTheme)}>
          {
            lightTheme ? <FiMoon size={30} /> : <FiSun size={30} />
          }
        </div>
      </div>
    </div>
  )
}

export default App

