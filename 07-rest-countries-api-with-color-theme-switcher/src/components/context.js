import React, {useState, useEffect, useContext, useReducer} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext();
const url = 'https://restcountries.com/v2/all';

const initialSate = {
  loading: true,
  data: [],
  displayData: [],
  theme: 'light',
  fadeProp: false,
  inputFilter: '',
  regionFilter: '',
  dropdownContent: [],
  countryInfoID: null,
  countryInfo: [],
  languageNames: '',
  borderCountries: []
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialSate)

const fetchData = async () => {
  const res = await fetch(url);
  const jsonData = await res.json();
  dispatch({type: 'setData',payload: jsonData}) 
  dispatch({type: 'setDisplayData'}) 
  dispatch({type: 'setLoading'}) 
  dispatch({type: 'setDropdownContent'}) 
}

useEffect(() => {
    fetchData();
},[])


useEffect(() => {
  dispatch({type: 'filterData'})
},[state.regionFilter])

useEffect(() => {
   dispatch({type: 'filterData'})
},[state.inputFilter])

return(
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
);

}

export const  useGlobalcontext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext}
