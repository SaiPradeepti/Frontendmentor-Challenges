import React from 'react'
import data from './data'
import Qna from './Qna'

const Faq = () => {
    return (
        <div className="faq">
            <section className="faq__container">
                <h1 className="faq__title">FAQ</h1>
                <div className="faq__list">
                    {
                        data.map(item => {
                            return(
                            <div key={item.id}>
                                <Qna {...item}/>
                            </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Faq
