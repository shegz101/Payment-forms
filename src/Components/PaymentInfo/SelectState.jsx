import React from 'react';
import './PaymentInfo.css';
import {FaChevronUp} from 'react-icons/fa';

const SelectState = ({data}) => {
    return (
        <div className='select-div'>
            <select className='payment__state__input'>
                {data.map((option, index) => (
                <option value={option} key={index}>
                    <span className='selected__state'>{option}</span>
                    <span className='selector__icon'><FaChevronUp/></span>
                </option>
                ))}
            </select>
        </div>
    )
}

export default SelectState;