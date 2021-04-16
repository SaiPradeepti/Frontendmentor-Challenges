import React from 'react'
import Faq from './Faq'
import woman from './img/illustration-woman-online-desktop.svg';
import box from './img/illustration-box-desktop.svg';
import bg from './img/bg-pattern-desktop.svg'

const App = () => {
  return (
    <div className="container">
      <div className="svg__container">
        <img src={bg} className="bg" alt="bg"/>
        <img src={woman} className="woman" alt="woman"/>
      </div>
      <img src={box} className="svg__box" alt="box"/>
      <Faq />      
    </div>
  )
}

export default App
