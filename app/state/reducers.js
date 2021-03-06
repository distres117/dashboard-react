import {ADD_DEVICE, ADD_DEVICES, REMOVE_DEVICE, ADD_READING, ADD_READINGS} from 'actionTypes';
import {combineReducers} from 'redux';

export const deviceReducer = (state=[], action)=>{
    switch (action.type){
        case ADD_DEVICE:
            return [action.payload, ...state];
        case ADD_DEVICES:
            return [...action.payload];
        case REMOVE_DEVICE:
            return state.filter(d=>d.id !== action.payload);
        default:
            return state;
    }
}

export const readingsReducer = (state=[], action)=>{
    switch(action.type){
        case ADD_READING:
            return [...state, action.payload.reading];
        case ADD_READINGS:
            return [...action.payload.readings];
        default:
            return state;
    }
}
export const reducers = combineReducers({
    devices: deviceReducer,
    readings:readingsReducer
});
