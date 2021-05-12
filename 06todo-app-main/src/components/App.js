import React, { useState } from 'react'
import '../scss/main.scss'
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi"
import Input from './Input'
import List from './List'

const App = () => {
  const [lightTheme,setLightTheme] = useState(false);
  const [list,setList] = useState([]);

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
    

  return (
    <div className={`app ${lightTheme ? 'lightTheme' : 'darkTheme'}`}>
      <div className="app__header">
        <div className="app__title">todo</div>
        <div className="app__darkTheme" onClick={()=>setLightTheme(!lightTheme)}>
          {
            lightTheme ? <FiMoon size={30} /> : <FiSun size={30} />
          }
        </div>
      </div>
      <Input addToDo={addToDo} />
      <List list={list} completedToDo={completedToDo} clearCompleted={clearCompleted} removeToDo={removeToDo} />
      <div className="app__drag">Drag and drop to reorder list</div>
    </div>
  )
}

export default App

