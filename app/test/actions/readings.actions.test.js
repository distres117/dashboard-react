var expect = require('chai').expect;
import {startGetAllDevices, startGetReadings} from 'actions';
import {ADD_READING, ADD_READINGS} from 'actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const createMockStore = configureMockStore([thunk]);

describe('Reading actions', ()=>{
    let store, testDevice, newReading;
    beforeEach(()=>{
        store = createMockStore({});
    });
    
    it('should get all devices', (done)=>{
        store.dispatch(startGetAllDevices())
        .then(()=>{
            let actions = store.getActions();
            testDevice = actions[0].payload[0].id;
            done();
        });
    });
    it('should get all readings for device', (done)=>{
        store.dispatch(startGetReadings(testDevice))
        .then(()=>{
            let actions = store.getActions();
            expect(actions[0].type).to.equal(ADD_READING);
            expect(actions[0].payload.readings.length).to.be.ok;
            done();
        });
    });
    
});