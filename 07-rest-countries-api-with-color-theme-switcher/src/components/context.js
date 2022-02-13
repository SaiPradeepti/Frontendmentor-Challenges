import React, {useState, useEffect, useContext, useReducer} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext();
const url = 'https://restcountries.com/v2/all';

const initialSate = {
  loading: true,
  data: [],
  theme: 'light',
  fadeProp: 'false',
  regionFilter: '',
  dropdownContent: []
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialSate)

const fetchData = async () => {
  const res = await fetch(url);
  const jsonData = await res.json();
  dispatch({type: 'setData',payload: jsonData}) 
  dispatch({type: 'setLoading'}) 
  dispatch({type: 'setDropdownContent'}) 
}

useEffect(() => {
    fetchData();
    console.log(state.data)
},[])
useEffect(() => {
    console.log(state.loading)
  // dispatch({type: 'setDropdownContent'}) 
},[state.loading])

useEffect(() => {
  dispatch({type: 'filterData',payload:state.regionFilter})
},[state.regionFilter])

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
