import React,{ useState } from 'react'
import Zoom from 'react-reveal/Zoom';

const Navbar = () => {
    const [showOverlay,setShowOverlay] = useState(false);

    const overlay = () => {
        setShowOverlay(!showOverlay);
    } 

    return (
        <nav className='nav'>
            {
                !showOverlay && (
                    <div className="nav__logo">
                        <img src="/img/logo-bookmark.svg" alt="nav-logo" />
                    </div>
                )
            }
            <div className="links">
                <ul className="nav__links">
                    <li className="link"> <a href="#features">Features</a></li>
                    <li className="link"> <a href="#">Pricing</a></li>
                    <li className="link"> <a href="#contact">Contact</a></li>
                    <li className="link"> 
                        <a href="#">
                            <button className="btnLogin">Login</button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav__icon">
                {
                !showOverlay && (
                    <div className="hamBurgerIcon" onClick={overlay}>
                        <img src="/img/icon-hamburger.svg" alt="hamBurgerIcon" />
                    </div>
                )
                }                
            </div>
            {
                showOverlay && 
                (
                    <Zoom duration={1500}> 
                        <div className="nav__overlay overlay">
                
                            <div className="overlay__menu">
                                <div className="overlay__logo">
                                    <div className="logo">                        
                                        <img src="/img/logo-bookmark-overlay.svg" alt="logo-overlay" />
                                    </div>
                                    <div className="closeIcon" onClick={overlay}>
                                        <img src="/img/icon-close.svg" alt="close-icon" />
                                    </div>
                                </div>
                                <div className="overlay__links">
                                    <div className="link">
                                        <a href="#features" onClick={overlay}>features</a>
                                    </div>
                                    <div className="link">
                                        <a href="#" onClick={overlay}>pricing</a>
                                    </div>
                                    <div className="link">
                                        <a href="#contact" onClick={overlay}>contact</a>
                                    </div>
                                    <div className="link">
                                        <a href="#" className="overlay-btn">login</a>
                                    </div>
                                </div>
                                <div className="overlay__social">
                                    <img src="/img/icon-facebook.svg" alt="facebook-icon" />
                                    <img src="/img/icon-twitter.svg" alt="twitter-icon" />
                                </div>
                            </div>        
                        </div>
                    </Zoom> 
                )
            }
            
        </nav>
    )
}

export default Navbar