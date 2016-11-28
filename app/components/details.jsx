import React, {Component} from 'react';
import {connect} from 'react-redux';
import Common from 'common';
import ChartPane from 'chartPane';
import ReadingsPane from 'readingsPane';
import {startGetAllDevices, startGetReadings} from 'actions';

class Details extends Component{
    constructor(props){
        super(props);
        this.loaded = false;
        
    }
    componentWillUpdate(){
        this.loaded = true;
    }
    componentDidMount(){
        this.loaded = true;
    }

    componentWillMount() {
        if (!this.props.devices.length)
            this.props.dispatch(startGetAllDevices());
        if (!this.props.readings.length){
            let param = this.props.params.id;
            this.props.dispatch(startGetReadings(param));
        }      
    }


    getDetails(){
        if (this.loaded){
            let param = this.props.params.id;
            let device = this.props.devices.filter(d=>d.id === param)[0];
            return (
                <div>
                    <ChartPane device={device} deviceReadings={this.props.readings}/>
                    <ReadingsPane device={device}/>
                </div>
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