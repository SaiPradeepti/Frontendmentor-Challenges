import React, { useState } from 'react'

const Input = ({addToDo}) => {
    const [todo,setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo !== '')
            addToDo(todo);
        setTodo('');   
    }
    return (
        <div className='app__input'>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className='form-radio'>
                        <input type="radio" name='checkbox' />
                    <div className='radioCover'></div>       
                    </div>   
                    <input type="text" name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Create a new todo...' autoComplete="off" />
                </div>
            </form>
        </div>
    )
}

export default Input
