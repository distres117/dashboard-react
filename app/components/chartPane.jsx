import React, { Component } from 'react';
import { connect } from 'react-redux';
const LineChart = require('react-chartjs').Line;

class ChartPane extends Component {
    constructor(props) {
        super(props);
    }

    makeData(readings) {
        if (readings.length) {
            //split into 20 groups
            //calculate average of each group
            let device = this.props.device;
            let dataPoints = readings.map(r=>parseInt(r.value || 0));
            let labels = ['start', 'finish'];
            let data = {
                labels: labels,
                datasets: [
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(76, 163, 214,.1)",
                        strokeColor: "rgba(76, 163, 214,1)",
                        highlightFill: "rgba(151,187,205,0)",
                        highlightStroke: "rgba(76, 163, 214,.5)",
                        data: dataPoints
                    }
                 
                ]
            };
            console.log(min,max);
            let options = {
                responsive: true,
                scaleSteps:10
            };
            return (
                <div>
                    <h4>{device.name}</h4>
                    <LineChart data={data} options={options} height='250' width='1300' />                
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
    render() {
        let readings =this.props.deviceReadings;
        return (
            <div className='chart-pane'>
                {this.makeData(readings)}
            </div>
        )
    }
}
export default connect(s => s)(ChartPane);