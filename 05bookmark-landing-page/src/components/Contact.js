import React,{ useState } from 'react'

const Contact = () => {
    const [email,setEmail] = useState('');
    const [emailList,setEmailList] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmailList((emailList)=>{
            if(email!=='')
            return [...emailList,email];
            else
            return [...emailList];
        })
        console.log(emailList);
        setEmail('');
    }
    return (
        <div className='contact'>
            <div className='contact__title'>35,000+ already joined</div>
            <div className='contact__content'>Stay up-to-date with what we’re doing</div>
            <form className='contact__form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email address' />
                </div>
                <button className='contact__btn'>Contact Us</button>
            </form>
        </div>
    )
}

export default Contact
