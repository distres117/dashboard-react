
const expect = require('chai').expect;
import {readingsReducer} from 'reducers';
import {ADD_READING, ADD_READINGS} from 'actionTypes';

describe('Readings reducers', ()=>{
    let state = [
        {type:'temperature', value: 65},
        {type:'temperature', value: 55},
        {type:'temperature', value: 45},
    ]
    it('should add new reading', ()=>{
        let action = {
            type: ADD_READING,
            payload:{
                reading: {type: 'temperature', value:75, id:'acbcd1234'}
            }
            
        };
        let res = readingsReducer(state, action);
        expect(res.length).to.equal(4);
        expect(res[3].id).to.equal(action.payload.reading.id);
    });
    it('should add multiple readings', ()=>{
        let action = {
            type: ADD_READINGS,
            payload:{
                readings: [
                    {type: 'temperature', value:75},
                    {type: 'temperature', value:85}
                ]
            }
        }
        let res = readingsReducer(state, action);
        expect(res.length).to.equal(5);
    });
});