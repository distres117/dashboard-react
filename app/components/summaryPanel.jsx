import React, {Component} from 'react';
import {connect} from 'react-redux';

class SummaryPanel extends Component{
    render(){
        return (
            <div className='summary-panel'>
                <h4>Summary panel</h4>
            </div>
        );
    }
}

export default connect(s=>s)(SummaryPanel);