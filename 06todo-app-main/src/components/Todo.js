import React from 'react'
import { FaCheck } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

const Todo = ({item,completedToDo,removeToDo}) => {
    const {id,todo} = item;
    
    return (
        <div className='app__todo'>
            <div className='app__button' onClick={() => completedToDo(id)}>
                <div className={`button__wrapper ${item.completed ? 'buttonClick' : false}`} >
                    {
                            item.completed ? <FaCheck className='faCheck'/> : <div className="button"></div>
                    }
                </div>
            </div>   
            <div className={`todo ${item.completed ? 'todoCompleted' : ''}`} onClick={() => completedToDo(id)}>
                {todo}
            </div>
            <VscChromeClose className='remove' onClick={() => removeToDo(id)}/>               
        </div>
    )
}

export default Todo
