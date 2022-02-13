import React from 'react'
import { FaSearch } from 'react-icons/fa';
import '../sass/filters.scss'
import { useGlobalcontext } from './context';
import { AiOutlineCaretDown } from "react-icons/ai";

const Filters = () => {
    const {state, dispatch} = useGlobalcontext();

  return (
    <>
        <div className="search">
            <form>
              <div className="search__icon">
                <FaSearch />
              </div>
              <input type="text" placeholder='search for country...' className='search__text'/>
            </form>
        </div>          
        <div className="dropdown">
            <div className="dropdown__btn">
                <div className="btncontent">Filter by Region</div>
                <div className="btnicon"><AiOutlineCaretDown /></div>
            </div>
            <div className="dropdown__content">
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