import React, { useEffect } from 'react'
import '../scss/main.scss'
import Input from './Input'
import List from './List'
import Alert from './Alert'
import { DragDropContext } from 'react-beautiful-dnd';
import { useGlobalContext } from './context'


const App = () => {
  const { dispatch, lightTheme, list, setLocalStorage } = useGlobalContext();

  useEffect(() => {
    setLocalStorage(list)
  },[list]);
    

  return (
    
      <div className={`app ${lightTheme ? 'lightTheme' : 'darkTheme'}`}>
        <DragDropContext onDragEnd={(param)=>{
          if(!param.destination){
            return;
          }
          const srcIndex = param.source.index;
          const destIndex = param.destination.index;

          list.splice(destIndex,0,list.splice(srcIndex,1)[0]);
          setLocalStorage(list);
          console.log(param);
        }}>
        {
          <Alert />
        }
        <div className="app__header">
          <div className="app__title">todo</div>
          <div className="app__darkTheme" onClick={()=>dispatch({type:'toggleLightTheme'})}>
            {
              lightTheme ? <img src="./images/icon-moon.svg" alt="moon" /> : <img src="./images/icon-sun.svg" alt="sun" />
            }
          </div>
        </div>
        <Input />
        <List  />
        <div className="app__drag">Drag and drop to reorder list</div>        
        </DragDropContext>
      </div>
    
  )
}

export default App

