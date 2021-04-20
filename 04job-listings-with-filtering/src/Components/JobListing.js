import React, { useState,useEffect } from 'react'
import data from '../data.json'
import JobPost from './JobPost'
import FilterBar from './FilterBar'

const JobListing = () => {    
    const [filterTags,setFilterTags] = useState([]);
    const [showFilter,setShowFilter] = useState(false);
    const [displayJobs,setDisplayJobs] = useState(data);

    useEffect(() => {
        if(filterTags.length > 0)
        {
            setDisplayJobs(displayJobs => {               
                const id = [];
                displayJobs = data.filter(job =>{                        
                    const tags = [job.role,job.level,...job.languages,...job.tools]
                    const check = filterTags.every(filterTag => tags.includes(filterTag))
                    return check === true;
                })
             return displayJobs;
            })
        }
        else{
            console.log('JHkjd')
            setDisplayJobs(data)
        }
    }, [filterTags])

    const openFilterBar = (tag) => {
        setShowFilter(true)
        setFilterTags((filterTags) => {
            if(filterTags.indexOf(tag) === -1){
                return [...filterTags,tag]
            }
            else{
                return [...filterTags]
            }
        })    
    }
    const closeFilterBar = () => {
        setShowFilter(false)
        setFilterTags([])
    }
    const updateFilterTags = (tag) => {
        setFilterTags((filterTags) => filterTags.filter(filterTag => filterTag !== tag))
    }
    return (
        <div className='job__listing'>
        {
            showFilter && ( filterTags.length > 0 ) && <FilterBar filterTags={filterTags} closeFilterBar={closeFilterBar} updateFilterTags={updateFilterTags} />
        }
            
        {
            displayJobs.map((item) => {
                return <JobPost key={item.id} {...item} openFilterBar={openFilterBar} />
            })
        }
        </div>
    )
}

export default JobListing
