import React from 'react';
import '../style.css';
// import {createStore} from './redux';
import {createStore} from 'redux';


const initialState = {count: 0};

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT': return { count: state.count + action.amount };
        case 'DECREMENT': return { count: state.count - action.amount };
        case 'RESET': return { count: 0 };
        default: return state;
    }
}

function increment(amount) {
    return { type: 'INCREMENT', amount };
}

function decrement(amount) {
    return { type: 'DECREMENT', amount };
}

function reset() { 
    return { type: 'RESET' };
}

const store = createStore(reducer);

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    }
    

    increment() {
        let amount = +this.refs.amount.value;
        store.dispatch(increment(amount));
    }
    
    decrement() {
        let amount = +this.refs.amount.value;
        store.dispatch(decrement(amount));
    }

    reset() {
        store.dispatch(reset());
    }

    render() {

        const count = store.getState().count;

        return (
            <div className="counter">
                <span className="count">{count}</span>

                <div>
                    <button onClick={this.reset}>R</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>

                <input type="text" ref="amount" defaultValue="1" />
            </div>
        );
    }
}

export default Counter;