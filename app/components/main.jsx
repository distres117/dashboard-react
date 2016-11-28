import React, { Component } from 'react';
import DevicePanel from 'devicePanel';
import { connect } from 'react-redux';
import Common from 'common';
import DeviceForm from 'deviceForm';
import { startGetAllDevices } from 'actions';
class Main extends Component {

    constructor(props) {
        super(props);
        this.loaded = this.props.devices.length ? true : false;
        this.state = {alerted:false, msg:'', color: 'green'};
    }
    showAlert = (msg)=>{
        let elem = $('.info-alert');
        this.setState({msg:msg});
        elem.fadeIn('fast');
        window.setTimeout(()=>elem.fadeOut('fast'), 5000);
    }
    componentWillUpdate() {
        this.loaded = true;
    }
    componentWillMount() {
        if (!this.props.devices.length)
            this.props.dispatch(startGetAllDevices());
    }

    getDevices() {
        if (this.loaded) {
            return this.props.devices.map(d => {
                return <DevicePanel doAlert={this.showAlert} key={d.id} {...d}></DevicePanel>
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
                <div className='info-alert' ref='alertBox' hidden='true'>{this.state.msg}</div>
                    <DeviceForm  doAlert={this.showAlert}/>
                    {this.getDevices()}
                </div>

            </div>

        );
    }
}
export default connect(s => s)(Main);