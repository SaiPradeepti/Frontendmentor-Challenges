import React,{ useState } from 'react'
import data from '../data/featuresData'
// import '../scss/main.scss'
import Fade from 'react-reveal/Fade';

const Features = () => {
    const [value,setValue] = useState(0);
    const {id, feature, img, title, desc} = data[value];
    
    return (
        <div className='features' id='features'>
            <div className="features__title">Features</div>
            <div className="features__desc">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</div>
            <div className="features__tabs">
                {
                    data.map((item,index) => {
                        return (
                            <div key={item.id} className={`features__tab ${index === value ?'activeTab': false}`} onClick={()=>setValue(item.id-1)}>
                                {item.feature}
                            </div>
                        );
                    })
                }
            </div>
            <div className="featureTab">
                <div className="featureTab__img">
                    <Fade left spy={value} appear distance='100px'>
                        <img src={img} alt={feature}/>
                    </Fade>
                </div>
                <Fade spy={value} appear>
                    <div className="featureTab__details">
                        <div className="featureTab__title">{title}</div>
                        <div className="featureTab__desc">{desc}</div>
                        <div className="featureTab__btn">More Info</div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Features
