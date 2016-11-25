const expect = require('chai').expect;
import {deviceReducer} from 'reducers';
import {ADD_DEVICE, ADD_DEVICES, REMOVE_DEVICE} from 'actionTypes';

describe('Device reducers', ()=>{
    it('should add new device', ()=>{
        let action = {
            type: ADD_DEVICE,
            payload:{name: 'test_device', type: 'temperature', id:'acbcd1234'}
            
        };
        let res = deviceReducer([], action);
        expect(res[0].id).to.equal(action.payload.id);
    });
    it('should remove device', ()=>{
        let state = [
            {name: 'test_device', type: 'temperature', id:'acbcd1234'},
            {name: 'test_device2', type: 'temperature', id:'qwert12345'},
            {name: 'test_device3', type: 'temperature', id:'asdf1234'}
        ];
        let action = {type: REMOVE_DEVICE, payload: 'acbcd1234'};
        let res = deviceReducer(state, action);
        expect(res.length).to.equal(2);
    });
});