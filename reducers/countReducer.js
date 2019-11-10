import { APP_ACTIONS } from '../constants'

const countReducer = (state = 0 , action) => {

    switch(action.type) {
        case APP_ACTIONS.INCREMENT:
            return state + 1 ;
        case APP_ACTIONS.DECREMENT:
            return  state- 1;
        case APP_ACTIONS.RESET:
            return 0;
        default:
            return state;
    }
};

export default countReducer;