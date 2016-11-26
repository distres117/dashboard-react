import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'sidebar';
import SummaryPane from 'summaryPane';

class Common extends Component {
    
    render() {
        return (
            <div>
                <Sidebar></Sidebar>
                <SummaryPane>
                </SummaryPane>
            </div>
        )
    }
}
export default connect(s=>s)(Common);
