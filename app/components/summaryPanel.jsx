import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryPanel extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
            this.renderGauge();
    }
    componentDidUpdate(){
            this.renderGauge();
    }

    renderGauge() {
            this.gaugeRendered = true;
            let value = this.devices.reduce((ac, d) => ac += parseInt(d.value), 0);
            console.log(value);
            this.g = new JustGage({
            id: this.props.type,
            relativeGaugeSize: false,
            height: 120,
            width: 150,
            value: Math.round(value / this.devices.length),
            min: 0,
            max: 100,
            title: this.props.title
        });
    }
    render() {
        this.devices = this.props.devices.filter(d => d.type === this.props.type);
        let style = 'label alert';
        if (this.devices.length) {
            style = 'label success';
        }
        return (
            <div className='summary-panel'>
                <span className={style}>{this.devices.length} devices reporting</span>
                <div id={this.props.type}></div>
            </div>
            
        );
    }
}

export default connect(s => s)(SummaryPanel);