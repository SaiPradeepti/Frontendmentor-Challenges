import React from 'react'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav__logo">
                <img src="/img/logo-bookmark.svg" alt="nav-logo" />
            </div>
            <div className="links">
                <ul className="nav__links">
                    <li className="link"> <a href="#features">Features</a></li>
                    <li className="link"> <a href="#contact">Pricing</a></li>
                    <li className="link"> <a href="#">Contact</a></li>
                    <li className="link"> 
                        <a href="#">
                            <button className="btnLogin">Login</button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav__icon">
                <div className="hamBurgerIcon">
                    <img src="/img/icon-hamburger.svg" alt="hamBurgerIcon" />
                </div>
            </div>
            <div className="nav__overlay overlay">
                <div className="overlay__menu">
                    <div className="overlay__logo">
                        <div className="logo">                        
                            <img src="/img/logo-bookmark-overlay.svg" alt="logo-overlay" />
                        </div>
                        <div className="closeIcon">
                            <img src="/img/icon-close.svg" alt="close-icon" />
                        </div>
                    </div>
                    <div className="overlay__links">
                    </div>
                    <div className="overlay__social"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
