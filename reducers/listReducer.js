import { APP_ACTIONS } from '../constants'

const listReducer = (state = [] , action) => {
    console.log('reducer: ', action);

    switch(action.type) {
        case APP_ACTIONS.ADD_LIST:
            return [...state, action.payload];
        default:
            return state;
    }
};

export default listReducer;