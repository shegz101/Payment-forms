import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='Header__section'>
            <h1 className='header__text'>Complete your Purchase</h1>
            <div className='header__nav'>
                <div>
                    <p className='inactive__nav'>Personal Info</p>
                </div>
                <div className='personal__nav__info'>
                    <p className='active__nav'>Billing Info</p>
                    <span><hr/></span>
                </div>
                <div>
                    <p className='inactive__nav'>Confirm Payment</p>
                </div>
            </div>
            <hr className='horizontal__line'/>
        </div>
    )
}

export default Header;