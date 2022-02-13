import React from 'react'
import '../sass/main.scss'
import { useGlobalcontext } from './context'
import Filters from './Filters';

const Main = () => {
  const {state, dispatch} = useGlobalcontext();

  if(state.loading) {
    return <div className='loading'>
      <div>Loading....</div>
    </div>
  }
  
  return (
    <main className="main">
      <div className="filter__container">
        <Filters />
      </div>
      <div className="card__container">        
        {state.data.map((item) => {
          const {name, flags: {png:img}, population, region, capital, numericCode:id} = item;
          
          return (
            <div className="card" key={id}>
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