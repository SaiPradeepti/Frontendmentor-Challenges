import React, { useState } from 'react'

const Input = ({dispatch,lightTheme}) => {
    const [todo,setTodo] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo !== '')
            dispatch({type: 'addToDo', payload: {id:new Date().getTime().toString(),'todo':todo,completed:false}});
        setTodo('');   
    }
    return (
        <div className='app__input'>
            <form onSubmit={handleSubmit}>
                <div className={`form-control ${lightTheme ? 'form-controlLight' : false}`}>
                    <div className='button__wrapper'>
                        <div className='button'></div>       
                    </div>   
                    <input type="text" name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Create a new todo...' autoComplete="off" />
                </div>
            </form>
        </div>
    )
}

export default Input
