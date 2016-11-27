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
            let elem = $(`#${this.props.type}`); //a hacky way of updating the gauge value...
            if (elem.children().length)
                elem.children()[0].remove();
            let value = this.devices.reduce((ac, d) => ac += parseInt(d.value), 0);
            this.g = new JustGage({
            id: this.props.type,
            relativeGaugeSize: false,
            height: 100,
            width: 150,
            value: Math.round(value / this.devices.length) || 0,
            min: 0,
            max: 100,
            title: this.props.title
        });
    }
    render() {
        this.devices = this.props.devices.filter(d => d.type === this.props.type);
        let sorted = this.devices.map(d=>parseInt(d.value)).sort((a,b)=> a-b);
        let style = 'label alert';
        if (this.devices.length) {
            style = 'label success';
        }
        return (
            <div className='summary-panel'>
                <span className={style}>{this.devices.length} devices reporting</span>
                <div id={this.props.type}></div>
                <small className='min-max'>min {sorted[0] || 0} / {sorted[sorted.length-1] || 0} max</small>
            </div>
            
            
        );
    }
}

export default connect(s => s)(SummaryPanel);