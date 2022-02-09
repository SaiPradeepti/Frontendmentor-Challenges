import React, {useState, useEffect, useContext} from 'react'

const AppContext = React.createContext();
const url = 'https://restcountries.com/v2/all';

const AppProvider = ({children}) => {
  const [data,setData] = useState([]);

const fetchData = async () => {
  const res = await fetch(url);
  const jsonData = await res.json();
  setData(jsonData)
}

useEffect(() => {
    fetchData();
    console.log(data)
},[])

return(
    <AppContext.Provider value={{}}>
        {children}
    </AppContext.Provider>
);

}

export const  useGlobalcontaxt = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext}
