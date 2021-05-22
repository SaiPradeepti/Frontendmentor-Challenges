import React, { useState, useEffect, useRef } from 'react'

const Input = ({dispatch,lightTheme}) => {
    const inputRef = useRef(null); 
    const [todo,setTodo] = useState('');

    // Focusing cursor on input field on page load
    useEffect(() => {
     inputRef.current.focus();   
    });


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
                    <input type="text" name='todo' value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder='Create a new todo...' autoComplete="off" ref={inputRef}/>
                </div>
            </form>
        </div>
    )
}

export default Input
