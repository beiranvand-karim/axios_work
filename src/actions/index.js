import axios from 'axios';

export function changeColor(color) {
  return {
    type: 'CHANGE_COLOR',
    color
  };
}

export function loadColor() {
  return (dispatch) => {
    axios.get('http://www.colr.org/json/color/random').then((response) => {
      dispatch(changeColor(`#${response.data.new_color}`));
    });
  };
}


export function getRecapthca(captcha) {

    return {
        type: 'GET_RECAPTCHA',
        captcha: 'karim'
    }
    
}


export function loadRecaptcha() {

    return (dispatch) => {

        axios.get('https://jibramzi.herokuapp.com/recaptcha').then((response) => {
            console.log(response.data.captcha);
            dispatch(getRecapthca(response.data.captcha));
        });
    }

}


export function signUpPost() {

    return {
        type: 'SIGNUP_RESPONSE',
        status: true
    }
}


export function signUpResponse(email, password, confirmPassword, firstName, lastName, gRecaptchaResponse) {

    return (dispatch) => {
        axios.post('https://jibramzi.herokuapp.com/signup', {
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            firstName: firstName,
            lastName: lastName,
            'g-recaptcha-response': gRecaptchaResponse

        }).then((response) => {
            console.log(response.data.captcha);
            dispatch(signUpPost());
        });
    }

}