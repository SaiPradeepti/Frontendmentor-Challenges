import React from 'react'
import { FaSearch } from 'react-icons/fa';
import '../sass/filters.scss'
import { useGlobalcontext } from './context';
import { AiOutlineCaretDown } from "react-icons/ai";

const Filters = () => {
    const {state, dispatch} = useGlobalcontext();

  return (
    <>
        <div className={`search ${state.theme === 'dark'? 'dark' : ''}`}>
            <form>
              <div className="search__icon">
                <FaSearch />
              </div>
              <input type="text" value={state.inputFilter} placeholder='search for country...' className={`search__text ${state.theme === 'dark'? 'dark' : ''}`} onChange={(e) => {
                  dispatch({type:'setInputFilter',payload:e.target.value})
                  e.preventDefault();
              }}/>
            </form>
        </div>          
        <div className={`dropdown ${state.theme === 'dark'? 'dark' : ''}`}>
            <div className={`dropdown__btn ${state.theme === 'dark'? 'dark' : ''}`}>
                {
                    (state.regionFilter !== '') && <div className="btncontent">{state.regionFilter}</div>
                }
                {
                    (state.regionFilter === '') && <div className="btncontent">Filter by Region</div>
                }
                <div className="btnicon"><AiOutlineCaretDown /></div>
            </div>
            <div className={`dropdown__content ${state.theme === 'dark'? 'dark' : 'light'}`}>
                {
                    state.dropdownContent.map((item,index) => {
                        return(
                            <div className="dropdown__value" key={index} onClick={() => dispatch({type: 'setRegionCategory', payload: item})}>{item}</div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Filters