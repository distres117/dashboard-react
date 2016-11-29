import React, { Component } from 'react';
import { connect } from 'react-redux';
const dateFormat = require('dateformat');

class ReadingsPane extends Component {
    constructor(props) {
        super(props);
    }
    getRows() {
        if (this.props.selectedReadings) {
            let formatString = 'dddd, mmmm dS, yyyy, h:MM TT';
            return this.props.selectedReadings.map(r => {
                return (
                    <tr key={r.id}>
                        <td>{r.type}</td>
                        <td>{dateFormat(r.createdAt, formatString)}</td>
                        <td>{dateFormat(r.updatedAt, formatString)}</td>
                        <td>{r.value}</td>
                    </tr>
                )
            });
        }
    }
    render() {
        let {selectedReadings, title} = this.props;
        return (
            <div className='readings-pane'>
                <h6>Readings from: {title}</h6>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect(s => s)(ReadingsPane);