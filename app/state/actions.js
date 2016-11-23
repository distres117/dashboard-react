import axios from 'axios';
import {ADD_DEVICE, ADD_DEVICES, REMOVE_DEVICE, ADD_READING, ADD_READINGS} from 'actionTypes';

const client = axios.create({baseURL: 'https://fullstack-challenge-api.herokuapp.com'})

//******************************** DEVICE ACTIONS *************************************
export const startGetAllDevices = () =>{
    return (dispatch, getState)=>{
        return client.get('/devices')
        .then((res)=>{
            dispatch(addDevices(res.data));
        });
    }   
}
export const startGetDevice = (id)=>{
    return (dispatch, getState)=>{
        return client.get(`/devices/${id}`)
        .then(res=>{
            dispatch(addDevice(res.data));
        });
    }
}
export const startAddDevice = (device) =>{
    return (dispatch, getState)=>{
        return client.post('/devices', device)
        .then(res=>{
            dispatch(addDevice(res.data));
        });
    }
}
export const startRemoveDevice = (id)=>{
    return (dispatch,getState)=>{
        return client.delete(`/devices/${id}`)
        .then(res=>{
            dispatch(removeDevice(id));
        })
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

export const removeDevice = (id)=>{
    return{
        type: REMOVE_DEVICE,
        payload:id
    }
}

//********************************** READINGS ACTIONS **********************************

export const startGetReadings = (deviceId)=>{
    return (dispatch, getState)=>{
        return client.get(`/devices/${deviceId}/readings`)
        .then(res=>{
            dispatch(addReading(deviceId, res.data));
        })
    }
}

export const addReading = (deviceId, readings)=>{
    return {
        type: ADD_READING,
        payload:{
            device: deviceId,
            readings
        }
    }
}