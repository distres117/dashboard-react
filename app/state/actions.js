import * as Axios from 'axios';
import {ADD_DEVICE, ADD_DEVICES, REMOVE_DEVICE, ADD_READING, ADD_READINGS} from 'actionTypes';

const axios = Axios.create({baseUrl: 'https://fullstack-challenge-api.herokuapp.com'})

export const startGetAllDevices = () =>{
    return (dispatch, getState)=>{
        axios.get('/devices')
        .then((res)=>{
            dispatch(addDevices(res.data));
        });
    }
    
}

export const addDevice = (device)=>{
    return {
        type: ADD_DEVICE,
        payload:device
    }
}

export const addDevices = (devices)=>{
    return {
        type:ADD_DEVICES,
        payload:devices
    }
}