import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Country from './components/Country'



const App = () => {
  return (
    <div className='app'>           
      <Header />
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/country/:id' element={<Country />} />  
      </Routes>
    </div>
  )
}

export default App
