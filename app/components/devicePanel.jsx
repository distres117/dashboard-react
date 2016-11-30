import React, {Component} from 'react';
import {connect} from 'react-redux';
import {startRemoveDevice, startGetReadings} from 'actions';
import {Link} from 'react-router';

class DevicePanel extends Component{

    deleteDevice = ()=>{
        let {id,dispatch, doAlert, name} = this.props;
        dispatch(startRemoveDevice(id))
        .then(()=>{
            doAlert(`${name} has been removed...`);
        });
        

    }
    handleClick = ()=>{
        let {id,dispatch} = this.props;
        dispatch(startGetReadings(id));
    }
    getValue(){
        let {value,type} = this.props;
        let style={color: 'orange'};
        if (this.props.type === 'temperature'){
            if (value > 90)
                style.color = 'red';
            return (
                <h1 style={style} className='device-content-value'>{value}&#8457;</h1>
            )
        }else{
            return (<h1 style={style} className='device-content-value'>{value}</h1>);
        }
    }

    render(){
        let {name, id, type} = this.props;
        return (
            <div className='device-panel'>
                <div className='device-panel-contents'>
                    <div className='device-panel-header'>
                            <i className='fi-laptop'></i><h6>{id}</h6>
                            <span className='label'>{type}</span>
                        <hr/>
                    </div>
                    <div className='device-panel-value'>
                        <span>{name}</span>
                        {this.getValue()}
                    </div>   
                </div>
                <div>
                    <a onClick={this.deleteDevice} style={{paddingRight:'10px', color:'red', float:'right'}}>Delete</a>
                    <Link onClick={this.handleClick} style={{float:'left'}} to={`details/${id}`} >More...</Link>
                </div>
            </div>
        )
    }
}

export default connect(s=>s)(DevicePanel);