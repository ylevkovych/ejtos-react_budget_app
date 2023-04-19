import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { currency, remaining } = useContext(AppContext);

    return (
        <div className='alert alert-success'>
            <span>Remaining:<br/>{currency}{remaining}</span>
        </div>
    );
};

export default Remaining;