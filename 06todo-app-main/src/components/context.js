import React, { useReducer, useContext } from 'react'
import { reducer } from './reducer'

const AppContext = React.createContext();

const getLocalStorage = () => {
  let list = JSON.parse(localStorage.getItem('list'));
  if(list)
    return list;
  else
    return [];
}

const setLocalStorage = (list) => {
  localStorage.setItem('list',JSON.stringify(list));
}

const initialState = {
  list: getLocalStorage(),
  lightTheme: false,
  showAlert: false,
  alertContent: '',
  alertColor: ''
}

export const AppContextProvider = ({children}) => {
  const [state,dispatch] = useReducer(reducer,initialState);

    return (
        <AppContext.Provider value={{
            dispatch: dispatch,
            lightTheme: state.lightTheme,
            alertContent: state.alertContent,
            alertColor: state.alertColor,
            showAlert: state.showAlert,
            list: state.list,
            setLocalStorage: setLocalStorage
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}