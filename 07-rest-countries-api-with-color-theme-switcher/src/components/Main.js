import React from 'react'
import '../sass/main.scss'
import { useGlobalcontext } from './context'

const Main = () => {
  const {state, dispatch} = useGlobalcontext();
  
  return (
    <main className="main">
      <div className="main__container">
        {state.data.map((item) => {
          const {name, flags: {png:img}, population, region, capital} = item;
          
          return (
            <div className="card">
              <div className="card__img">
                <img src={img} alt={name} />
              </div>
              <div className="card__info">
                <div className='card__name'>{name}</div>
                <div className='country__info'>
                  <div className='card__population'>population: <span className="countryInfovalue">{population}</span></div>
                <div className='card__region'>region: <span className="countryInfovalue">{region}</span></div>
                <div className='card__capital'>capital: <span className="countryInfovalue">{capital}</span></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Main