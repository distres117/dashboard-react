var expect = require('chai').expect;
import {startGetAllDevices, addDevice, addDevices} from 'actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const createMockStore = configureMockStore([thunk]);

describe('Device actions', ()=>{
    it('should get all devices', (done)=>{
        let store = createMockStore({});
        return store.dispatch(startGetAllDevices())
        .then(()=>{
            let actions = store.getActions();
            expect(actions.length).to.be.ok;
        });
    });
});