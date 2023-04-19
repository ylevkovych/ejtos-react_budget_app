import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaMinusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency} = useContext(AppContext);

    const handleIncreaseCost = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item
        });
    };

    const handleDecreaseCost = () => {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item
        });
    };

    const handleDeleteItem = () => {
        const item = {
            name: props.name
        };

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: item
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlusCircle size='2.2em' color="green" onClick={handleIncreaseCost}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDecreaseCost}></FaMinusCircle></td>
        <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    );
};

export default ExpenseItem;