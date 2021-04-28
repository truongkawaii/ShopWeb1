import { Actions } from '../actions';

const initialState = {
  isLoggedIn: false,
  isError: false,
  message: '',
  token: localStorage.getItem('tokens'),
};

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.USER_LOGIN:
      return {
        ...state,

        token: localStorage.getItem('tokens'),
      };
    case Actions.USER_LOGIN_SUCCESS:
      console.log(('action nè', action));
      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        token: action.payload.token,
        message: 'Đăng nhập thành công',
      };
    case Actions.USER_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        token: '',
        message: action.payload,
      };
    case Actions.USER_LOGOUT:
      localStorage.removeItem('tokens');
      return {
        ...state,
        token: '',
        isLoggedIn: false,
        isError: false,
        message: 'Bạn vừa đăng xuất',
      };
    default:
      return { ...state };
  }
}
export default loginReducer;
