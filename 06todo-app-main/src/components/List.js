import React, { useState, useEffect } from 'react'
import Todo from './Todo'

const List = ({list,completedToDo,clearCompleted,removeToDo,lightTheme}) => {
    const [newList,setNewList] = useState(list);
    const [itemsLeft,setItemsLeft] = useState(0);
    const [activeState,setActiveState] = useState('all');

    // Set display list
    useEffect(() => {
        setNewList(list)
    },[list])

    // filter list based on activeState
    useEffect(() => {
        if(activeState === 'all')
            setNewList(list);
        else if(activeState === 'active')
            setNewList(list.filter(item => item.completed === false));
        else if(activeState === 'completed')
            setNewList(list.filter(item => item.completed === true));
    },[activeState,list])

    // Count of items yet to complete
    useEffect(() => {
        let count = list.reduce((count,item)=>{
            if(item.completed !== true)
                return count+1;
            else
            return count
        },0);
        setItemsLeft(count);
    }, [list])

    return (
        <div className={`app__list ${lightTheme ? 'app__light' : false}`}>
            <div className="todo__list">
            {
                newList.map((item) => {
                    return (
                        <Todo item={item} key={item.id} completedToDo={completedToDo} removeToDo={removeToDo} lightTheme={lightTheme}/>
                    )                    
                })
            }</div>
            <div className="app__menu">
                <div className="app__listItems">{itemsLeft} items left</div>
                <div className="app__states">
                    <div className={`all ${activeState === 'all' ? 'activeState' : false}`} onClick={()=>setActiveState('all')}>All</div>
                    <div className={`active ${activeState === 'active' ? 'activeState' : false}`} onClick={()=>setActiveState('active')}>Active</div>
                    <div className={`completed ${activeState === 'completed' ? 'activeState' : false}`} onClick={()=>setActiveState('completed')}>Completed</div>
                </div>
                <div className="app__clearCompleted" onClick={clearCompleted}>Clear Completed</div>
            </div>
        </div>
    )
}

export default List
