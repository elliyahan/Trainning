import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  decrement, increment  } from '../../store/counter/counterSlice';

const Counter  = () => {
    const dispatch = useDispatch() ; 
    const count=useSelector(state=>state.counter.value)
    return (
        <div>
             <button
            aria-label="Increment value"
            onClick={() => dispatch(increment(2))}
            >
            Increment
            </button>
            <span>{count}</span>
            <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement(1))}
            >
            Decrement
            </button>
        </div>
    );
};

export default Counter ;