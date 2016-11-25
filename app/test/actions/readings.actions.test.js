var expect = require('chai').expect;
import {startGetAllDevices, startGetReadings, startAddReading} from 'actions';
import {ADD_READING, ADD_READINGS} from 'actionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';


const createMockStore = configureMockStore([thunk]);

xdescribe('Reading actions', ()=>{
    let store, testDevice, newReading, readingCount;
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
            readingCount = actions[0].payload.readings.length;
            expect(actions[0].type).to.equal(ADD_READING);
            expect(actions[0].payload.readings.length).to.be.ok;
            done();
        });
    });
    it('should create a new reading', (done)=>{
        let reading = {
            type:'temperature',
            value: Math.round(Math.random() * 100),
            deviceId: testDevice
        }
        store.dispatch(startAddReading(testDevice, reading))
        .then(res=>{
            let actions = store.getActions();
            expect(actions[0].type).to.equal(ADD_READING);
            done();
        });
    });
    it('ensure reading was created for device', (done)=>{
        store.dispatch(startGetReadings(testDevice))
        .then(res=>{
            let actions = store.getActions();
            expect(actions[0].payload.readings.length).to.equal(readingCount + 1);
            done();

        })
    });
    
});