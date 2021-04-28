import { Actions } from '../actions';

const initialState = {
  data: null,
  dataSort: null,
};

function listPosition(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_POSITION_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        dataSort: action.payload.data,
      };

    default:
      return state;
  }
}
export default listPosition;
