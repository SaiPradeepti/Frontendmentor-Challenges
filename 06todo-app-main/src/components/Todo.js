import React from 'react'
import { Draggable } from 'react-beautiful-dnd';


const Todo = ({index,item,completedToDo,removeToDo,lightTheme}) => {
    const {id,todo} = item;
    
    return (
        <Draggable draggableId={`draggable-${index}`} index={index}>
            {(provided, snapshot) => (
                // <div className={`app__todo ${lightTheme ? 'todo__light': false}`} innerRef={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div className={`app__todo ${lightTheme ? 'todo__light': false}`} provided={provided} ref={provided.innerRef}>
                    <div className='app__button' onClick={() => completedToDo(id)}>
                        <div className={`button__wrapper ${item.completed ? 'buttonClick' : false}`} >
                            {
                                    item.completed ? <img src="./images/icon-check.svg" alt="icon-check" className="faCheck" /> : <div className="button"></div>
                            }
                        </div>
                    </div>   
                    <div className={`todo ${item.completed ? 'todoCompleted' : ''}`} onClick={() => completedToDo(id)}>
                        {todo}
                    </div>
                    <img src="./images/icon-cross.svg" alt="icon-cross"  className='remove' onClick={() => removeToDo(id)}/>          
                </div>
            )}
        </Draggable>
    )
}

export default Todo
