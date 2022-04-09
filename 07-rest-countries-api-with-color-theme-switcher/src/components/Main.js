import React, { useEffect } from 'react'
import '../sass/main.scss'
import { useGlobalcontext } from './context'
import Filters from './Filters';
import Skeleton from './Skeleton';
import {Navigate, useNavigate} from 'react-router-dom'

const Main = () => {
  const {state, dispatch} = useGlobalcontext();
    const navigate = useNavigate();

  const handleNavigate = (id) => {
    const navigatePage = navigate(`/country/${id}`)
    dispatch({type: 'setCountryInfoID', payload: {id}})
  }

  //   if(state.loading) {
  //   return <div className={`loading ${state.theme === 'dark'? 'darkGrey': ''}`}>
  //     <div>Loading....</div>
  //   </div>
  // }

  if(state.loading) {
    return <div className={`${state.theme === 'dark'? 'darkGrey': ''}`}>
      <Skeleton />
    </div>
  }    
  
  return (
    <main className={`main ${state.theme === 'dark'? 'darkGrey': ''}`}>
      <div className="filter__container">
        <Filters />
      </div>
      <div className={`card__container ${state.displayData.length < 4 ? 'medium' : ''}`} style={state.displayData.length === 0 ? {height:'63vh'} : {}}>        
        {state.displayData.map((item) => {
          const {name, flags: {png:img}, population, region, capital, numericCode:id} = item;
          
          return (            
            <div className={`card ${state.theme === 'dark'? 'lightGrey': ''}`} key={id} onClick={() => handleNavigate(id)}>
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