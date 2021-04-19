import React from 'react'

const JobDetails = ({company,newpost,featured,position,postedAt,contract,location}) => {
    return (
        <div className='job__details'>
            <div className="row1">
                <div className="company__name">{company}</div>
            {
                newpost && <div className="job__newpost">NEW!</div>
            }
            {
                featured && <div className="job__featured">FEATURED</div>
            }
            </div>
            <div className="row2">
                <div className="job__position">{position}</div>
            </div>            
            <div className="row3">
                <div className="job__postedAt">{postedAt}</div>
                <span className="dot">&#8226;</span>
                <div className="job__contract">{contract}</div>
                <span className="dot">&#8226;</span>
                <div className="job__location">{location}</div>
            </div>
            
        </div>
    )
}

export default JobDetails
