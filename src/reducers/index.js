

const defaultState = {

  color: 'red',
    captcha: '',
    status: false
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

      case 'SIGNUP_RESPONSE':
          return {
              ...state,
              status: action.status
          };
    default:

      return {
        ...state,
      };
  }
};


export default mainReducer;
