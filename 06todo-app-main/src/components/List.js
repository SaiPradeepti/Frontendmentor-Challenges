import React, { useState, useEffect } from 'react'
import Todo from './Todo'

const List = ({list,completedToDo}) => {
    const [itemsLeft,setItemsLeft] = useState(0);

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
        <div className='app__list'>
            {
                list.map((item,index) => {
                    return (
                        <Todo item={item} key={index} completedToDo={completedToDo}/>
                    )                    
                })
            }
            <div className="app__menu">
                <div className="app__listItems">{itemsLeft} items left</div>
                <div className="app__states"></div>
                <div className="app__clearCompleted"></div>
            </div>
        </div>
    )
}

export default List
