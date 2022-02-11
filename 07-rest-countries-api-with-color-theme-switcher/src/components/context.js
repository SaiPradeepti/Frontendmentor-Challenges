import React, {useState, useEffect, useContext, useReducer} from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext();
const url = 'https://restcountries.com/v2/all';

const initialSate = {
  data: [],
  theme: 'light',
  fadeProp: 'false'
}

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialSate)

const fetchData = async () => {
  const res = await fetch(url);
  const jsonData = await res.json();
  dispatch({type: 'setData',payload: jsonData})  
}

useEffect(() => {
    fetchData();
    console.log(state.data)
},[])

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
