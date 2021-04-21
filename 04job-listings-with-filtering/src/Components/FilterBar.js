import React from 'react'
import { MdClose } from 'react-icons/md'
import Fade from 'react-reveal/Fade';

const FilterBar = ({filterTags,closeFilterBar,updateFilterTags}) => {
    
    return (
        <>
            <Fade bottom>
                <div className='filterBar'>
                    <div className="tags__container">
                        {
                        filterTags.map((tag,index) => {
                            return (
                                <div key={index} className="tag__btn">
                                    <div className="tag__text">
                                        {tag}
                                    </div>
                                    <div className="tag__icon" onClick={() => updateFilterTags(`${tag}`)}>
                                        <MdClose style={{strokeWidth: "2"}}/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className="clear__btn" onClick={() => closeFilterBar()}>
                        Clear    
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default FilterBar
