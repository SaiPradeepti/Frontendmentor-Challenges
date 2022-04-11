import React from 'react'
import '../sass/skeleton.scss'
import { useGlobalcontext } from './context'

const Skeleton = () => {
    const {state, dispatch} = useGlobalcontext();
    const dummyArr = Array.from({length: 8}, (_,i)=>i+1)

  return (
    <main className={`main ${state.theme === 'dark'? 'darkGrey': ''}`}>
      <div className='skeleton__container'>
        {dummyArr.map((item,index) => {
                    
          return (      
            <div className={`skeleton ${state.theme === 'dark'? 'darkSkeleton': ''}`} key={index}>
              <div className={`skeleton__img ${state.theme === 'dark'? 'darkSubSkeleton': ''}`}></div>
              <div className="skeleton__info">
                <div className={`skeleton__empty ${state.theme === 'dark'? 'darkSubSkeleton': ''}`}></div>
                <div className={`skeleton__empty ${state.theme === 'dark'? 'darkSubSkeleton': ''}`}></div>
                <div className={`skeleton__empty ${state.theme === 'dark'? 'darkSubSkeleton': ''}`}></div>
              </div>
              <div className={`loadingAnimation ${state.theme === 'dark'? 'darkAnimation': ''}`}></div>
            </div> 
          )
        })}
      </div>
    </main>
  )
}

export default Skeleton