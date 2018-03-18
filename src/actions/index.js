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
