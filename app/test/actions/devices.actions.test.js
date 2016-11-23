var expect = require('chai').expect;
import {startGetAllDevices, addDevice, addDevices, startAddDevice, startRemoveDevice} from 'actions';
import {ADD_DEVICE, ADD_DEVICES, REMOVE_DEVICE} from 'actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
const client = axios.create({baseURL: 'https://fullstack-challenge-api.herokuapp.com' });


const createMockStore = configureMockStore([thunk]);

xdescribe('Device actions', ()=>{
    let createdDevice, store;
    beforeEach(()=>{
        store = createMockStore({});
    });
    it('should GET', (done)=>{
        client.get('devices')
        .then(res=>{
            expect(res.data.length > 1).to.be.ok;
            done();
        });
    });
    it('should get all devices', (done)=>{
        store.dispatch(startGetAllDevices())
        .then(()=>{
            let actions = store.getActions();
            expect(actions[0].type).to.equal(ADD_DEVICES);
            expect(actions.length).to.be.ok;
            done();
        });
    });
    it ('should post new device', (done)=>{
        let device = {name:'test_device'};
        store.dispatch(startAddDevice(device))
        .then((res)=>{
            let actions = store.getActions();
            let actionDevice = actions[0].payload;
            createdDevice = actionDevice.id;
            expect(actions[0].type).to.equal(ADD_DEVICE)
            expect(actionDevice.name).to.equal(device.name);
            done();
        });
    });
    it('should remove created device', (done)=>{
        store.dispatch(startRemoveDevice(createdDevice))
        .then((res)=>{
            let actions = store.getActions();
            expect(actions[0].type).to.equal(REMOVE_DEVICE);
            done();
        });
    });
    it('ensure device was removed', (done)=>{
        store.dispatch(startGetAllDevices())
        .then(res=>{
            let actions = store.getActions();
            let result = actions[0].payload.filter(o=>o.id === createdDevice.id);
            expect(result.length).to.equal(0);
            done();
        })
    });
});