
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget:<br/>{currency}<input type="number" step="10" name="Budget" id="Budget" onChange={event=>setBudget(event.target.value)} value={budget}></input></span>
        </div>
    );
};

export default Budget;