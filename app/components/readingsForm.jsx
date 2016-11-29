import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddReading} from 'actions';

class ReadingsForm extends Component{
    constructor(props){
        super(props);
        this.state = {errorMsg:'', added:false};
    }
    handleclick = ()=>{
        let val = this.refs.newValue.value;
        if (!val){
            this.setState({errorMsg:'A value must be entered...'});
            return;
        }
        if (!parseInt(val)){
            this.setState({errorMsg:'Value must be a number...'});
            return;
        }
        let device = this.props.device;
        let reading = {
            value: parseInt(val),
            type: device.type,
            deviceId: device.id
        }
       this.props.dispatch(startAddReading(device.id, reading))
       .then(()=>{
            this.setState({added:true, errorMsg:''});
            this.refs.newValue.value = '';
            window.setInterval(()=>this.setState({added:false}), 5000);
       });
        
    }
    render(){
        let {errorMsg, added} = this.state;
        return(
            <div className='readings-form'>
                <button className='button' onClick={this.handleclick}>Submit new reading</button>
                <input type='text' ref='newValue' placeholder='enter a reading value...'/>
                <div style={{paddingLeft:'15px', display:'inline-block'}}>
                    <span style={{color: 'red'}} hidden={!errorMsg} >{errorMsg}</span>
                    <span style={{color:'green'}} hidden={!added}>Reading has been added at current date/time...</span>
                </div>
            </div>
        )
    }
}
export default connect(s=>s)(ReadingsForm);