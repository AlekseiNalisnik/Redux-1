import React from 'react'

import { useDispatch, useSelector } from "react-redux";
import incrementAction from "../actions/counter/increment";
import decrementAction from "../actions/counter/decrement";
import resetAction from "../actions/counter/reset";


const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    console.log('count component: ', count);

    return (
        <div>
            <h1>Counter component</h1>
            <button onClick={() => dispatch(incrementAction)} >increment</button>
            <button onClick={() => dispatch(decrementAction)} >decrement</button>
            <button onClick={() => dispatch(resetAction)} >reset</button>
            <h1>{`our store is ${count}: `}</h1>
        </div>
    );
};

export default Counter;