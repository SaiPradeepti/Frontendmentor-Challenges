import React from 'react'
import { useGlobalcontext } from './context'
import { useParams, Outlet } from 'react-router-dom'

const Country = () => {
  const {state, dispatch} = useGlobalcontext();
  const {id} = useParams();
  
  console.log(id)
  return (
    <div>{id}</div>
  )
}

export default Country