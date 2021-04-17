import React, { useState } from 'react'
import arrow from './img/icon-arrow-down.svg'

const Qna = ({id,question,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false);
    
    return (
        <section key={id} className="qna" >
            <div className="qna__question">
                <div className={showAnswer ? 'question boldColor' : 'question'}>
                    {question}
                </div>
                <img src={arrow} className={showAnswer? 'arrow arrow-down' : 'arrow'} onClick={()=>setShowAnswer(!showAnswer)} alt="arrow"/>
            </div>
            <div className="qna__answer">
                { showAnswer && answer }
            </div>
            <div className="qna__divider">
            </div>
        </section>
    )
}

export default Qna
