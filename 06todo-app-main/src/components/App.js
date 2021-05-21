import React, { useEffect, useReducer } from 'react'
import { reducer } from './reducer'
import '../scss/main.scss'
import Input from './Input'
import List from './List'
import { DragDropContext } from 'react-beautiful-dnd';

const setLocalStorage = (list) => {
  localStorage.setItem('list',JSON.stringify(list));
}

const getLocalStorage = () => {
  let list = JSON.parse(localStorage.getItem('list'));
  if(list)
    return list;
  else
    return [];
}

const initialState = {
  list: getLocalStorage(),
  lightTheme: false
}

const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState);

  useEffect(() => {
    setLocalStorage(state.list)
  },[state.list]);
    

  return (
    
      <div className={`app ${state.lightTheme ? 'lightTheme' : 'darkTheme'}`}>
        <DragDropContext onDragEnd={(param)=>{
          if(!param.destination){
            return;
          }
          const srcIndex = param.source.index;
          const destIndex = param.destination.index;

          state.list.splice(destIndex,0,state.list.splice(srcIndex,1)[0]);
          setLocalStorage(state.list);
          console.log(param);
        }}>
        <div className="app__header">
          <div className="app__title">todo</div>
          <div className="app__darkTheme" onClick={()=>dispatch({type:'toggleLightTheme'})}>
            {
              state.lightTheme ? <img src="./images/icon-moon.svg" alt="moon" /> : <img src="./images/icon-sun.svg" alt="sun" />
            }
          </div>
        </div>
        <Input dispatch={dispatch} lightTheme={state.lightTheme} />
        <List dispatch={dispatch} list={state.list} lightTheme={state.lightTheme} />
        <div className="app__drag">Drag and drop to reorder list</div>        
        </DragDropContext>
      </div>
    
  )
}

export default App

