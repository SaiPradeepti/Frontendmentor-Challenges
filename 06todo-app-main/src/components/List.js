import React from 'react'
import Todo from './Todo'

const List = ({list}) => {
    return (
        <div className='app__list'>
            {
                list.map((todo,index) => {
                    return (
                        <Todo todo={todo} key={index} />
                    )                    
                })
            }
            <div className="app__menu">
                <div className="app__listItems"></div>
                <div className="app__states"></div>
                <div className="app__clearCompleted"></div>
            </div>
        </div>
    )
}

export default List
