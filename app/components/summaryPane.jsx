import React, {Component} from 'react';
import {connect} from 'react-redux';
import SummaryPanel from 'summaryPanel';

class SummaryPane extends Component{
    render(){
        return (
        <div className='summary-pane'>
            <SummaryPanel type='temperature' title='Avg. Temperature'/>
            <SummaryPanel type='humidity' title='Avg. Humidity'/>
            <SummaryPanel type='airquality' title='Avg. Air Quality'/>
        </div>
        )
    }
}

export default connect(s=>s)(SummaryPane);