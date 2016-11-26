import React, { Component } from 'react';
import DevicePanel from 'devicePanel';
import { connect } from 'react-redux';
import Common from 'common';
import {startGetAllDevices} from 'actions';
class Main extends Component {

    constructor(props){
        super(props);
        this.loaded = this.props.devices.length ? true : false;
    }
    componentWillUpdate(){
        this.loaded = true;
    }
    componentWillMount(){
        if (!this.props.devices.length)
            this.props.dispatch(startGetAllDevices());
    }

    getDevices() {
        if (this.loaded) {
            return this.props.devices.map(d=>{
                return <DevicePanel key={d.id} {...d}></DevicePanel>
            });
    
        }
        else {
            return (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
                )
        }
    }
    render() {
        return (
            <div className="wrapper">
                <Common></Common>
                <div className='device-view'>
                    {this.getDevices()}
                </div>
                    
            </div>

        );
    }
}
export default connect(s => s)(Main);