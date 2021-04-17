import React from 'react'
import Faq from './Faq'
import box from './img/illustration-box-desktop.svg';
import mobileSvg from './img/mobile.svg'

const App = () => {
  return (
    <div className="container">
      <div className="svg__container">
        <img src={mobileSvg} className="mobileSvg" alt="mobileSvg"/>
      </div>
      <img src={box} className="svg__box" alt="box"/>
      <Faq />      
    </div>
  )
}

export default App
