import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const supportIcon = <FontAwesomeIcon icon={faShoppingCart} />
    const loginIcon = <FontAwesomeIcon icon={faUser} />
    return (
        <div className='header'>
            <div className='navbar'>
                <h1><span className='make'>make</span>TRIP</h1>
                <div className='menu'>
                    <a href="/home">{supportIcon} Support</a>
                    <a href="/about-us">{   phoneIcon} +880171215146</a>
                    <a href="/Services">{ loginIcon}  Login</a>
                </div>
            </div>
            <div className='content'>
                <h1>Make your own trip Package</h1>
                <p>You can make your own budget, and your trip will awesome</p>
                <h2 className='totalBudget'>Total Budget:100 million</h2>
            </div>
        </div>
    );
};

export default Header;