import React from 'react'
import JobDetails from './JobDetails'
import JobTags from './JobTags'

const JobPost = ({id,company,logo,newpost,featured,position,role,level,postedAt,contract,location,languages,tools,openFilterBar}) => {
    
    const jobDetailsInfo = {company,newpost,featured,position,postedAt,contract,location};
    const jobTagsInfo = {role,level,languages,tools};
    return (
        <div className={featured ? 'job job__border' : 'job'}>
            {/* <div className="job__logo" style={{background: `url(${logo})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'contain'}}> */}
            <div className="job__logo">
                <img src={logo} alt={company}/>
            </div>
            <JobDetails {...jobDetailsInfo}/>
            <JobTags {...jobTagsInfo} openFilterBar={openFilterBar}/>
        </div>
    )
}

export default JobPost
