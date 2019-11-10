import { combineReducers } from 'redux'

import countReducer from "./countReducer";
import listReducer from "./listReducer";


export default combineReducers({ count: countReducer, list: listReducer });