

const defaultState = {

  color: 'red',
    captcha: ''
};


const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.color,
      };

      case 'GET_RECAPTCHA':
          return {
              ...state,
              captcha: action.captcha

          };
    default:

      return {
        ...state,
      };
  }
};


export default mainReducer;
