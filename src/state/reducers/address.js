import { Actions } from '../actions';

const initialState = {
  data: null,
  total: 0,
};

const addressHandler = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_LIST_ADDRESS_SUCCESS: {
      const { data, total } = action.payload;
      return {
        ...state,
        data,
        total,
      };
    }
    default:
      return state;
  }
};

export default addressHandler;
