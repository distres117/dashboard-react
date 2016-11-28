import React, {Component} from 'react';
import {connect} from 'react-redux';

class ReadingsPane extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let {readings} = this.props;
        console.log(readings);
        return(
            <div className='readings-pane'>
                <table>
                </table>
            </div>
        )
    }
}

export default connect(s=>s)(ReadingsPane);