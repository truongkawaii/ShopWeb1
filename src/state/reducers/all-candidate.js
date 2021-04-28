import { Actions } from '../actions';

const initialState = {
  data: null,
};

const allCandidate = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DATA_CANDIDATE_SUCCESS: {
      const { payload: data } = action;
      return {
        ...state,
        data,
      };
    }
    default:
      return state;
  }
};

export default allCandidate;
