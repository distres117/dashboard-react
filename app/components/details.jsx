import React, {Component} from 'react';
import {connect} from 'react-redux';
import Common from 'common';
import {startGetAllDevices} from 'actions';

class Details extends Component{
    constructor(props){
        super(props);
        this.loaded = this.props.devices.length ? true : false;
    }
    componentWillUpdate(){
        this.loaded = true;
    }

    componentWillMount() {
        if (!this.props.devices.length)
            this.props.dispatch(startGetAllDevices());
    }

    getDetails(){
        if (this.loaded){
            let param = this.props.params.id;
            let device = this.props.devices.filter(d=>d.id === param)[0];
            return (
                <h4>Here are the details for device {device.name}</h4>
            )
        }else{
            return (
                <div className='loader-container'>
                    <div className='loader'></div>
                </div>
                )
        }
    }
    render(){
        return (
            <div className="wrapper">
                <Common></Common>
                <div className='details-view'>
                    {this.getDetails()}
                </div>
            </div>
        )
    }
}

export default connect(s=>s)(Details);