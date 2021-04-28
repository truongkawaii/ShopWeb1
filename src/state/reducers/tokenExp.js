import { Actions } from '../actions';

const initialState = {
  tokenExp: false,
  token: localStorage.getItem('tokens'),
};

function tokenExp(state = initialState, action) {
  switch (action.type) {
    case Actions.REDIRECT_LOGIN_TOKEN_EXP:
      return {
        ...state,
        tokenExp: true,
        token: '',
      };

    default:
      return { ...state };
  }
}
export default tokenExp;
