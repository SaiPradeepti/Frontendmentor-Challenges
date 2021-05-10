import React, { useState } from 'react'

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
            </div>   
            <div className="todo">
                {todo}
            </div>                
        </div>
    )
}

export default Todo
