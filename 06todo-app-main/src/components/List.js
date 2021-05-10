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
        </div>
    )
}

export default List
