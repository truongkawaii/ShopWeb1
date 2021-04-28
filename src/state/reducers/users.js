import { Actions } from '../actions';

const initialState = {
  data: null,
  dataSort: null,
  sorting: false,
};

function listUser(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataSort: action.payload,
      };

    case Actions.LIST_USER_BLOCK:
      const dataUpdated = state.dataSort.filter(item => item.status === '0');
      return {
        ...state,
        dataSort: dataUpdated,
        sorting: true,
      };

    case Actions.LIST_USER_ALL:
      return {
        ...state,
        dataSort: state.data,
        sorting: false,
      };

    default:
      return { ...state };
  }
}
export default listUser;
