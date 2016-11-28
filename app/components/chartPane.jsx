import React, { Component } from 'react';
import { connect } from 'react-redux';
const LineChart = require('react-chartjs').Line;

class ChartPane extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My Second dataset",
                    fillColor: "rgba(76, 163, 214,.1)",
                    strokeColor: "rgba(76, 163, 214,1)",
                    highlightFill: "rgba(151,187,205,0)",
                    highlightStroke: "rgba(76, 163, 214,.5)",
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: "My First dataset",
                    fillColor: "rgba(214, 126, 76,.1)",
                    strokeColor: "rgba(214, 126, 76,1)",
                    highlightFill: "rgba(214, 126, 76,0.75)",
                    highlightStroke: "rgba(214, 126, 76,1)",
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "My First dataset",
                    fillColor: "rgba(64, 195, 44,.1)",
                    strokeColor: "rgba(64, 195, 44,1)",
                    highlightFill: "rgba(220,220,220,0)",
                    highlightStroke: "rgba(214, 76, 94,1)",
                    data: [40, 59, 65, 81, 80, 55, 56]
                },
            ]
        };
        let options = {
            responsive:true
        };

        return (
            <div className='chart-pane'>
                <LineChart data={data} options={options} height='250' width='1300' />
            </div>
        )
    }
}
export default connect(s => s)(ChartPane);