import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import addListAction from "../actions/list/add";

const List = () => {
    const [input, setInput] = useState();

    const dispatch = useDispatch();
    const list = useSelector(state => state.list);

    console.log('list component: ', list);

    return (
        <div>
            <h1>List component</h1>
            <input type="text" onChange={event => setInput(event.target.value)} />
            <button onClick={() => dispatch(addListAction(input))}>add to list</button>
            <ul>{list.map((item, index) => <li key={index}>{item}</li> )}</ul>
        </div>
    );
};
export default List;