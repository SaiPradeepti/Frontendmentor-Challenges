import React, { useState } from 'react'
import data from './data'
import Qna from './Qna'

const Faq = () => {
    const activeIndex = 0;

    return (
        <div className="faq">
            <section className="faq__container">
                <h1 className="faq__title">FAQ</h1>
                <div className="faq__list">
                    {
                        data.map((item,index) => {
                            return(
                            <Qna {...item} key={item.id} activeIndex={activeIndex}/>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Faq
