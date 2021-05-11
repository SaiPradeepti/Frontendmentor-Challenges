import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";

const Todo = ({todo}) => {
    const [todoCompleted,setTodoCompleted] = useState(false);
    console.log(todo);
    return (
        <div className='app__todo'>
            <div className='radio' onClick={() => 
            {
                setTodoCompleted(!todoCompleted);
                console.log('radio clicked')
            }
            }>
                <input type="radio" name='radio' />
                <div className={`radioCover ${todoCompleted ? 'radioClick' : ''}`} ></div>
                {
                    todoCompleted && <FaCheck className='faCheck'/>
                }   
            </div>   
            <div className={`todo ${todoCompleted ? 'todoCompleted' : ''}`}>
                {todo}
            </div>                
        </div>
    )
}

export default Todo
