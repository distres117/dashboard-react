import React, { Component } from 'react';
import DevicePanel from 'devicePanel';
import { connect } from 'react-redux';
import Common from 'common';

class Main extends Component {
    render() {
        let devices = this.props.devices.map(d=>{
            return (<DevicePanel key={d.id} {...d}></DevicePanel>)
        });
        return (
            <div className="wrapper">
                <Common></Common>
                <div className='device-view'>
                    {devices}
                </div>
            </div>

        );
    }
}
export default connect(s => s)(Main);