import React from 'react';
import PaymentHeader from '../Header/PaymentHeader';
import {Link} from 'react-router-dom';
import './PaymentInfo.css';
import states from './state_type.json';
import SelectState from './SelectState';


const PaymentInfo = () => {
    return (
        <div className='payment__section'>
            <PaymentHeader/>
            <div className='payment__form'>
                <form>
                    <div className='payment__section__name'>
                        <label htmlFor='name' className='payment__name'>Name</label>
                        <input type='text' required className='name__input'/>
                    </div>
                    <div className='payment__section__email'>
                        <label htmlFor='emailaddress' className='payment__mail'>Email Address  <span style={{color:'red',}}>*</span></label>
                        <p className='form__instructor__text'>The purchase receipt would be sent to this address.</p>
                        <input type='email' required className='email__input'/>
                    </div>
                    <div className='payment__address__one'>
                        <label htmlFor='name' className='payment__address'>Address 1</label>
                        <input type='text' required className='payment__address__input'/>
                    </div>
                    <div className='payment__address__one'>
                        <label htmlFor='name' className='payment__address'>Address 2</label>
                        <input type='text' required className='payment__address__input'/>
                    </div>
                    <div className='local__state__section'>
                        <div>
                            <label htmlFor='localGovt' className='payment__local'>Local Government</label>
                            <input type='text' required className='payment__local__input'/> 
                        </div>
                        <div>
                            <label htmlFor='state' className='payment__state'>State</label>
                            <SelectState data={states}/>
                        </div>
                    </div>
                    <div className='submit__section'>
                        <Link to='/billing' style={{textDecoration:'none', outline:'none',}}><button type='submit' className='submit__payment__info'>Next</button></Link>
                        <button className='cancel__payment__info' onClick={(e) => {window.location.reload()}}>Cancel Payment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentInfo;