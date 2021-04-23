import React,{ useState } from 'react'
import data from '../data/featuresData'

const Features = () => {
    const [value,setValue] = useState(0);
    const {id, feature, img, title, desc} = data[value];
    
    return (
        <div className='features'>
            <div className="features__title">Features</div>
            <div className="features__desc">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
            <div className="features__tabs">
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="features__tab" onClick={()=>setValue(item.id-1)}>
                                {item.feature}
                            </div>
                        );
                    })
                }
            </div>
            <div className="feature__info">
                <div className="featureTab__img">
                    <img src={img} alt={feature}/>
                </div>
                <div className="featureTab__details">
                    <div className="featureTab__title">{title}</div>
                    <div className="featureTab__desc">{desc}</div>
                </div>
            </div>
        </div>
    )
}

export default Features
