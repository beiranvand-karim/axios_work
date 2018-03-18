import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';

class LogIn extends React.Component {
    render(){
        return(
            <div>
                <h1>Log in</h1>

                <span>{this.props.color}</span>
                <br/>
                <span>{this.props.captcha}</span>

                <button onClick={() => this.props.loadRecaptcha()}>get captcha</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(LogIn);