import React, { useEffect } from 'react'

const Alert = ({dispatch,content,color,showAlert}) => {
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
               showAlert && <div className="alert__content" style={{color: `${color}`}}>{content}</div>
           }
        </div>
    )
}

export default Alert
