import React, { Component } from 'react';
import { connect } from 'react-redux';
const LineChart = require('react-chartjs').Line;
import ReadingsPane from 'readingsPane';
import ReadingsForm from 'readingsForm';
const dateFormat = require('dateformat');

class ChartPane extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedReadings:[]}
    }
    getDataPoint = (e) => {
        let chart = this.refs.chart.getChart();
        let label = parseInt(chart.getPointsAtEvent(e)[0].label);
        $('.readings-pane').show();
        let formatString = 'dddd, mmmm dS, yyyy, h:MM TT';
        let group = this.groups[label].sort((a,b)=>Date.parse(a.createdAt) - Date.parse(b.createdAt));
        let range = `${dateFormat(group[0].createdAt, formatString )} to ${dateFormat(group[group.length -1].createdAt, formatString)}`;
        this.setState({selectedReadings:group, title: `${group.length} Readings from: ${range}`});
    }
    // componentDidUnmount(){
    //     this.setState({selectedReadings:[]});
    // }

    makeData(readings) {
        if (readings && readings.length >= 30) {
            //split into 30 groups
            let groupSize = Math.floor(readings.length / 30);
            //calculate average of each group
            this.groups = [];
            let dataPoints = [];
            for (let i = 0; i < readings.length; i += groupSize) {
                let j = i;
                let _group = [];
                let group = [];
                while (j < i + groupSize) {
                    let reading = readings[j];
                    if (reading !== undefined){
                        _group.push(reading);
                        group.push(parseInt(reading.value));
                    }
                    j++;
                }
                let avg = Math.round(group.reduce((ac, n) => ac += n, 0) / group.length);
                this.groups.push(_group);
                dataPoints.push(avg);
            }
            let device = this.props.device;
            let labels = dataPoints.map((d, i) => i)
            let data = {
                labels: labels,
                datasets: [
                    {
                        label: "",
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
                    <span>{'Average ' + device.type + ' values'} </span>
                    <LineChart ref='chart' onClick={this.getDataPoint} data={data} options={options} height='200' width='1300' />
                    <div className='chart-subtitle'>
                        <i>Click on a datapoint to view raw data...</i>
                    </div>
                    <ReadingsForm device={this.props.device}/>
                </div>
            )
        } else {
            return (
                <div>
                    <h4>Not enough readings for this device to visualize...</h4>
                    <ReadingsForm device={this.props.device}/>
                </div>
            )
        }
    }
    render() {
        let readings = this.props.deviceReadings;
        let {selectedReadings, title} = this.state;
        return (
            <div>
                <div className='chart-pane'>
                    {this.makeData(readings)}
                </div>
                <div hidden={!selectedReadings || !selectedReadings.length}>
                    <ReadingsPane selectedReadings={selectedReadings} title={title} />
                </div>
               
            </div>
        )
    }
}
export default connect(s => s)(ChartPane);