import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class DevicePanel extends Component{
    render(){
        let {name, id} = this.props;
        return (
            <div className='device-panel'>
                <h4>{name}</h4>
                <Link to={`details/${id}`}>More...</Link>
            </div>
        )
    }
}

export default connect(s=>s)(DevicePanel);