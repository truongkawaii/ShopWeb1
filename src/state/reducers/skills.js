import { Actions } from '../actions';

const initialState = {
  data: null,
  dataSort: null,
};

function listSkill(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_LIST_SKILL_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        dataSort: action.payload.data,
      };

    default:
      return state;
  }
}
export default listSkill;
