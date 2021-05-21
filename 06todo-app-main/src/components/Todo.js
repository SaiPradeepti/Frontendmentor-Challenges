import React from 'react'


const Todo = ({item,dispatch,lightTheme}) => {
    const {id,todo} = item;
    
    return (
                <div className={`app__todo ${lightTheme ? 'todo__light': false}`} >
                    <div className='app__button' onClick={() => dispatch({type:'completedToDo',payload:{id:id}})}>
                        <div className={`button__wrapper ${item.completed ? 'buttonClick' : false}`} >
                            {
                                    item.completed ? <img src="./images/icon-check.svg" alt="icon-check" className="faCheck" /> : <div className="button"></div>
                            }
                        </div>
                    </div>   
                    <div className={`todo ${item.completed ? 'todoCompleted' : ''}`} onClick={() => dispatch({type:'completedToDo',payload:{id:id}})}>
                        {todo}
                    </div>
                    <img src="./images/icon-cross.svg" alt="icon-cross"  className='remove' onClick={() => dispatch({type:'removeToDo',payload:{id:id}})}/>         
                </div>
           
    )
}

export default Todo
