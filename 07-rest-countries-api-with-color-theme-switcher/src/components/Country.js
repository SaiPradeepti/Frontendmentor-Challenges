import React, {useEffect } from 'react'
import { useGlobalcontext } from './context'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import '../sass/country.scss'
import {BsArrowLeft} from 'react-icons/bs'

const Country = () => {
  const {state, dispatch} = useGlobalcontext();
  const {id} = useParams();
  const navigate = useNavigate();

  const handleHomeNavigate = () => {
    const navigateHomePage = navigate('/')
  }

  // const handleClick = (id) => {
  //   dispatch
  // }

  const handleCountryNavigate = (id) => {
    const navigateCountryPage = navigate(`/country/${id}`)
    dispatch({type: 'setCountryInfoID', payload: {id}})
  }

  useEffect(() => {
    dispatch({type: 'setCountryInfo',payload: {id}})
    dispatch({type: 'setCountryDetails'})
    handleCountryNavigate(id)
  },[id])
  
  return (
    <div className='country'>
      <div className="btn" onClick={() => handleHomeNavigate()}>
        <div className="btn__icon"><BsArrowLeft/></div>
        <div className="btn__text">Back</div>
      </div>
        {
          state.countryInfo.map(item => {
              const {name, flags: {svg: img}, nativeName, population, region, subregion, capital, topLevelDomain, currencies, numericCode:id} = item;
              return <div className="country__info" key={id}>
                <div className="country__img">
                  <img src={img} alt={name} />
                </div>
                <div>
                  <div className="country__name">{name}</div>
                  <div className="country__details">
                      <div className="country__details1">
                        <div><b>nativeName:</b> {nativeName}</div>
                        <div><b>population:</b> {population}</div>
                        <div><b>region:</b> {region}</div>
                        <div><b>subegion:</b> {subregion}</div>
                        <div><b>capital:</b> {capital}</div>
                      </div>
                      <div className="country__details2">
                        <div><b>topLevelDomain:</b> {topLevelDomain[0]}</div>
                        <div><b>currencies:</b> {currencies[0].name}</div>
                        <div><b>languages:</b> {state.languageNames}</div>
                      </div>
                  </div>
                  <div className="country__borders">
                    <b>Borders:</b> 
                    <div className="country__border">
                      {
                      state.borderCountries.map(item => {
                        const {id,name} = item;
                        return (<div className='border' key={id} onClick={() => {
                            if(name !== 'No Borders'){
                              dispatch({type: 'setCountryInfoID', payload: {id}})
                            handleCountryNavigate(id)
                            }
                          }
                        }>{name}</div>)
                      })
                    }
                    </div>
                  </div>
                </div>
              </div>
          })
        }
    </div>
  )
}

export default Country