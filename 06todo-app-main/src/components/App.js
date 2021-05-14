import React, { useState, useEffect } from 'react'
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

const App = () => {
  const [lightTheme,setLightTheme] = useState(false);
  const [list,setList] = useState(getLocalStorage());

  // Adding todo to list from input field
  const addToDo = (todo) =>{
    setList([...list,{id:new Date().getTime().toString(),'todo':todo,completed:false}]);
  }

  // Setting completed key of a todo to true
  const completedToDo = (id) => {
    setList(list.map(item => {
      if(item.id === id)
      item.completed = !item.completed;
      return item;
    }))
  }

  // Clearing completed todos from list
  const clearCompleted = () => {
    setList(list.filter(item => item.completed !== true))
  }

  // Remove todo
  const removeToDo = (id) => {
    setList(list.filter(item => item.id !== id))
  }

  // Set Local Storage
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
        <div className="app__header">
          <div className="app__title">todo</div>
          <div className="app__darkTheme" onClick={()=>setLightTheme(!lightTheme)}>
            {
              lightTheme ? <img src="./images/icon-moon.svg" alt="moon" /> : <img src="./images/icon-sun.svg" alt="sun" />
            }
          </div>
        </div>
        <Input addToDo={addToDo} lightTheme={lightTheme} />
        <List list={list} completedToDo={completedToDo} clearCompleted={clearCompleted} removeToDo={removeToDo} lightTheme={lightTheme} />
        <div className="app__drag">Drag and drop to reorder list</div>
        </DragDropContext>
      </div>
    
  )
}

export default App

