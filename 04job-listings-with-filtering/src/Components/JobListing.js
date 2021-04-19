import React from 'react'
import data from '../data.json'
import JobPost from './JobPost'

const JobListing = () => {
    return (
        <div className='job__listing'>
            {
                data.map((item,index) => {
                    return <JobPost key={item.id} {...item}/>
                })
            }
        </div>
    )
}

export default JobListing
