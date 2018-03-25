import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/index';
import Recaptcha from 'react-grecaptcha';



class LogIn extends React.Component {

    state = {

        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        gRecaptchaResponse: ''
    };

    verifyCallback = (response) => {
        console.log(response);
        this.setState({'g-recaptcha-response': response});


        console.log(this.state);
    };

    expiredCallback = () => {
        console.log('test');
    };

    sendData = () => {
        this.props.signUpResponse('be.iranvandkarim@gmail.com', '12345', '12345', 'karim', 'beiranvand', this.state.gRecaptchaResponse);
    };

    render(){
        return(
            <div>
                <h1>Log in</h1>

                <span>{this.props.color}</span>
                <br/>
                <span>{this.props.captcha}</span>

                <button onClick={() => this.props.loadRecaptcha()}>get captcha</button>
                <button onClick={() => this.sendData()}>send signup data</button>


                <Recaptcha
                    sitekey={'6Lciqj8UAAAAAIiMhAqDVA31pYeKYTOC-epp606q'}
                    callback={this.verifyCallback}
                    expiredCallback={this.expiredCallback}
                    locale="fa"
                    className="customClassName"
                    data-theme="dark"
                />


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};


export default connect(mapStateToProps, actionCreators)(LogIn);
