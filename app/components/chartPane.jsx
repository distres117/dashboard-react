import React, { Component } from 'react';
import { connect } from 'react-redux';
const LineChart = require('react-chartjs').Line;

class ChartPane extends Component {
    constructor(props) {
        super(props);
    }
    getDataPoint(e){
        console.log(e.target);
    }

    makeData(readings) {
        if (readings.length) {
            //split into 30 groups
            let groupSize = Math.floor(readings.length /30);
            //calculate average of each group
            let dataPoints = [];
            for(let i=0;i<readings.length;i+=groupSize){
                let j = i;
                let group = [];
                while(j<i+groupSize){
                    let reading = readings[j];
                    if (reading !== undefined)
                        group.push(parseInt(reading.value));
                    j++;
                }
                let avg = Math.round(group.reduce((ac,n)=>ac+=n,0) / group.length);
                dataPoints.push(avg);
            }
            let device = this.props.device;
            let labels = dataPoints.map((d,i)=>i)
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
            let options = {
                responsive: true,
            };
            return (
                <div>
                    <h5><i className='fi-laptop'></i> {device.id}</h5>
                    <span>{'Average '+ device.type + ' values'} </span>
                    <LineChart onClick={this.getDataPoint} data={data} options={options} height='200' width='1300' />
                    <div className='chart-subtitle'>
                        <small>Click on a datapoint to view raw data...</small>
                    </div>               
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