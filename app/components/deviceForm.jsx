import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startAddDevice} from 'actions';

class DeviceForm extends Component{
    constructor(props){
        super(props);
        this.state = {error:false};
    }
    createDevice = (e)=>{
        e.preventDefault();
        let {dispatch} = this.props;
        let {newName, newType, newValue} = this.refs;
        if (!newName.value || newType.value === 'default' || !newValue.value ){
            this.setState({error: true});
            return;
        }
        this.setState({error:false});
        let device = {
            name:newName.value,
            type:newType.value,
            value:newValue.value
        }
        this.refs.newName.value = '';
        this.refs.newType.value = 'default';
        this.refs.newValue.value = '';
        dispatch(startAddDevice(device));
        this.props.doAlert('New device added!');
            
    }
    render(){

        return (
            <div className='device-panel'>
                <div className='device-panel-contents'>
                    <div className='device-panel-header'>
                            <i className='fi-laptop'></i><h6>New Device</h6>
                        <form>
                            <small hidden={!this.state.error} style={{color:'red'}} >All fields are required</small>
                            <div className='row'>
                                <input type='text' ref='newName' placeholder='New device name'/>
                                
                            </div>
                            <div className='row'>
                                <select ref='newType'>
                                    <option value='default'>Select type</option>
                                    <option value='temperature'>Temperature</option>
                                    <option value='airquality'>Air quality</option>
                                    <option value='humidity'>Humidity</option>
                                </select>
                            </div>
                            <div>
                                <input type='text' ref='newValue' style={{float:'left', width:'150px', display:'inline-block'}} placeholder='Enter a value...'/>
                            </div>
                            <a className='button' onClick={this.createDevice}>Create</a>
                        </form>
                    </div>  
                </div>
            </div>
        );
    }
}

export default connect(s=>s)(DeviceForm);