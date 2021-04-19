import React from 'react'
import JobDetails from './JobDetails'
import JobTags from './JobTags'

const JobPost = ({id,company,logo,newpost,featured,position,role,level,postedAt,contract,location,languages,tools}) => {
    console.log(logo)
    const jobDetailsInfo = {company,newpost,featured,position,postedAt,contract,location};
    const jobTagsInfo = {role,level,languages,tools};
    return (
        <div className={featured ? 'job job__border' : 'job'}>
            <div className="job__logo" style={{background: `url(${logo})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center'}}>
                {/* <div className="logo__img"></div> */}
            </div>
            <JobDetails {...jobDetailsInfo}/>
            <JobTags {...jobTagsInfo}/>
        </div>
    )
}

export default JobPost
