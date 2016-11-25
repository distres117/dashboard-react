import React, {Component} from 'react';
import {connect} from 'react-redux';
import Common from 'common';

class Details extends Component{
    render(){
        let param = this.props.params.id;
        let device = this.props.devices.filter(d=>d.id === param)[0];
        return (
            <div className="wrapper">
                <Common></Common>
                <div className='details-view'>
                    Here are the details for {device.name}
                </div>
            </div>
        )
    }
}

export default connect(s=>s)(Details);