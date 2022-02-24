import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <>
        <div className='notfound'>
            <h1>We couldn't find this request</h1>
            <div className="btn" onClick={()=>navigate('/')}>Back to Home Page</div>
        </div>
    </>
  )
}

export default NotFound