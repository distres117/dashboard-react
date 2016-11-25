import React, {Component} from 'react';
import {connect} from 'react-redux';
import SummaryPanel from 'summaryPanel';

class SummaryPane extends Component{
    render(){
        return (
        <div className='summary-pane'>
            <SummaryPanel/>
            <SummaryPanel/>
            <SummaryPanel/>
        </div>
        )
    }
}

export default connect(s=>s)(SummaryPane);