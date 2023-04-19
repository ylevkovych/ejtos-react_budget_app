import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const getCurrencyText = () => {
        let curr = "";
        if (currency == "$") {
            curr = "$ Dollar";
        } else if (currency == "£") {
            curr = "£ Pound";
        } else if (currency == "€") {
            curr = "€ Euro";
        } else if (currency == "₹") {
            curr = "₹ Ruppee";
        } 
        return curr;
    };

    const chgCurrency = (val)=>{
        let curr = val[0];
        dispatch({
            type: 'CHG_CURRENCY',
            payload: curr,
        })
    };

    return (
        <div className="dropdown">
            <button className="dropbtn">Currency: ({getCurrencyText()})</button>
            <div className="dropdown-content">
                <a href="#" onClick={event=>chgCurrency(event.target.text)}>$ Dollar</a>
                <a href="#" onClick={event=>chgCurrency(event.target.text)}>£ Pound</a>
                <a href="#" onClick={event=>chgCurrency(event.target.text)}>€ Euro</a>
                <a href="#" onClick={event=>chgCurrency(event.target.text)}>₹ Ruppee</a>
            </div>
        </div>
    );
};

export default Currency;