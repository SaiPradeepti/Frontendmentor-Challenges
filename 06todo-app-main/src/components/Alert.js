import React, { useEffect } from 'react'
import { useGlobalContext } from './context'

const Alert = () => {
    const { dispatch,alertContent,alertColor,showAlert } = useGlobalContext();

    const alert = () => {
        setTimeout(()=>{
            dispatch({type:'hideAlert'});
        },3000);
    }

    useEffect(() => {
        alert();
        return () => {
            clearTimeout(()=>{
                alert();
            })
        }
    },[showAlert]);

    return (
        <div className='alert'>
           {
               showAlert && <div className="alert__content" style={{color: `${alertColor}`}}>{alertContent}</div>
           }
        </div>
    )
}

export default Alert
