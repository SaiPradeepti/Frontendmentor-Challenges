import React, { useState } from 'react'
import arrow from './img/icon-arrow-down.svg'

const Qna = ({id,question,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false);
    
    return (
        <div key={id} className="qna" >
            <div className="qna__question">
                <div className={showAnswer ? 'question boldColor' : 'question'}>
                    {question}
                </div>
                <div className="btn__arrow">
                    <img src={arrow} className={showAnswer? 'arrow arrow-down' : 'arrow'} onClick={()=>setShowAnswer(!showAnswer)} alt="arrow"/>
                </div>
            </div>
            <div className="qna__answer">
                { showAnswer && answer }
            </div>
            <div className="qna__divider">
            </div>
        </div>
    )
}

export default Qna
