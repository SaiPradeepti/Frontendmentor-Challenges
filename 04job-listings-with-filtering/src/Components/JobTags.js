import React from 'react'

const JobTags = ({role,level,languages,tools}) => {
    const tags = [role,level,...languages,...tools];

    return (
        <div className='job__tags'>
            {
                tags.map((item,index) => {
                    return (
                        <div key={index} className="tag">
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JobTags
