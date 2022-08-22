import React from 'react';
import './Header.css';

const PaymentHeader = () => {
    return (
        <div className='Header__section'>
            <h1 className='header__text'>Complete your Purchase</h1>
            <div className='header__nav'>
                <div className='personal__nav__info'>
                    <p className='active__nav'>Personal Info</p>
                    <span><hr/></span>
                </div>
                <div>
                    <p className='inactive__nav'>Billing Info</p>
                </div>
                <div>
                    <p className='inactive__nav'>Confirm Payment</p>
                </div>
            </div>
            <hr className='horizontal__line'/>
        </div>
    )
}

export default PaymentHeader;