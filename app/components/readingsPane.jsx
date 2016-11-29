import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReadingsPane extends Component {
    constructor(props) {
        super(props);
    }
    getRows() {
        if (this.props.selectedReadings){
        return this.props.selectedReadings.map(r => {
            return (
                <tr key={r.id}>
                    <td>{r.type}</td>
                    <td>{r.createdAt}</td>
                    <td>{r.updatedAt}</td>
                    <td>{r.value}</td>
                </tr>
            )
        });
        }
    }
    render() {
        return (
            <div className='readings-pane'>
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