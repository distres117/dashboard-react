import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let devices = this.props.devices.map(d => {
            return (
                <li key={d.id}>
                    <i className='fi-laptop'/><Link to={`/details/${d.id}`}>{d.id}</Link>
                </li>
            );
        });
        return (
            <div>
                <div className='sidebar'>
                    <br />
                    <h4>Devices</h4>
                    <ul className="side-nav">{devices}</ul>

                </div>

            </div>)
    }
}

export default connect((s) => s)(Sidebar);