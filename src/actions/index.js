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
