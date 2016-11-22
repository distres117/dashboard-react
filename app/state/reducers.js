import {ADD_DEVICE, REMOVE_DEVICE, ADD_READING} from 'actionTypes';
import {combineReducers} from 'redux';

const deviceReducer = (state=[], action)=>{
    switch (action.type){
        case ADD_DEVICE:
            return [...state, action.payload];
        case REMOVE_DEVICE:
            return state.filter(d=>d !== action.payload);
        default:
            return state;
    }
}

const readingsReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_READING:
            return [...state, action.payload];
        default:
            return state;
    }
}
export const reducers = combineReducers({
    devices: deviceReducer,
    readings:readingReducer
});
