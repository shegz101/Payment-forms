import React from 'react';
import BillingHeader from '../Header/BillingHeader';
import './BillingForm.css';
import {FaChevronDown} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import '../PaymentInfo/PaymentInfo.css';

const BillingForm = () => {
    return (
        <div className='billing__section'>
            <BillingHeader/>
            <form>
                    <div className='payment__section__name'>
                        <label htmlFor='name' className='payment__name'>Name on Card</label>
                        <input type='text' required className='name__input'/>
                    </div>
                    <div className='payment__address__one'>
                        <label htmlFor='name' className='payment__address'>Card Type <span style={{color:'red'}}>*</span></label>
                        <p className='card__type'><span className='card_name'>Visa</span><span className='selector__icon'><FaChevronDown/></span></p>
                    </div>
                    <div className='payment__address__one'>
                        <label htmlFor='name' className='payment__address'>Card Details</label>
                        <input type='text' required className='payment__address__input'/>
                    </div>
                    <div className='submit__section'>
                        <Link to='/billing' style={{textDecoration:'none', outline:'none',}}><button type='submit' className='submit__payment__info'>Next</button></Link>
                        <button className='cancel__payment__info' onClick={(e) => {window.location.reload()}}>Cancel Payment</button>
                    </div>
                </form>
        </div>
    )
}

export default BillingForm;