import React from 'react'
import '../sass/pagination.scss'
import { useGlobalcontext } from './context'

const Pagination = () => {
    const {state, dispatch} = useGlobalcontext();
    let pageArr = Array.from({length: state.numberOfPages}, (_, i) => i + 1)

  return (
    <div className={`pagination ${state.theme === 'dark'? 'darkGrey' : ''}`}>
        {
          pageArr.map(item => {
            return (
              <div className={`pagination__item ${item===state.pageSelected?'activePage':''}`} key={item} onClick={()=>dispatch({type:'setPageSelected', payload:{item}})}>{item}</div>
            )
          })
        }
    </div>
  )
}

export default Pagination