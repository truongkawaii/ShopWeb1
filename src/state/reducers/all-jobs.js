import { Actions } from '../actions';

const initialState = {
  dataJobs: null,
  dataJobsSort: null,
  total: 0,
  perPage: 0,
  showModal: false,
};

const allJobs = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_DATA_JD_SUCCESS: {
      // eslint-disable-next-line camelcase
      const { data, total, per_page } = action.payload;
      // const pagiData = data.slice(0, state.initialNews);
      return {
        ...state,
        dataJobs: data,
        dataJobsSort: data,
        total,
        perPage: per_page,
        // paginationData: pagiData,
      };
    }
    case Actions.SHOW_MODAL: {
      return {
        ...state,
        showModal: true,
      };
    }
    case Actions.HIDE_MODAL: {
      return {
        ...state,
        showModal: false,
      };
    }
    // case Actions.PAGINATION_DATA: {
    //   const { payload: orderPage = 1 } = action;
    //   const newData = [...state.data];
    //   const begin = (orderPage - 1) * state.initialNews;
    //   const end = orderPage * state.initialNews;
    //   const newDataUpdate = newData.slice(begin, end);
    //   return {
    //     ...state,
    //     paginationData: newDataUpdate,
    //   };
    // }

    default:
      return state;
  }
};

export default allJobs;
