import Actions from './action.type';

export const getDataJD = payload => ({
  type: Actions.GET_DATA_JD,
  payload,
});

export const getDataJDSuccess = payload => ({
  type: Actions.GET_DATA_JD_SUCCESS,
  payload,
});

export const getDataCandidate = () => ({
  type: Actions.GET_DATA_CANDIDATE,
});

export const getDataCandidateSuccess = payload => ({
  type: Actions.GET_DATA_CANDIDATE_SUCCESS,
  payload,
});

export const addNewJD = payload => ({
  type: Actions.ADD_DATA_JD,
  payload,
});

export const editJD = payload => ({
  type: Actions.EDIT_DATA_JD,
  payload,
});

export const deleteJd = payload => ({
  type: Actions.DELETE_DATA_JD,
  payload,
});

export const postNewCandidate = payload => ({
  type: Actions.ADD_DATA_CANDIDATE,
  payload,
});

export const editCandidate = payload => ({
  type: Actions.EDIT_DATA_CANDIDATE,
  payload,
});

export const deleteCandidate = payload => ({
  type: Actions.DELETE_DATA_CANDIDATE,
  payload,
});

export const paginationDataJobs = payload => ({
  type: Actions.PAGINATION_DATA,
  payload,
});

// Handler token login
export const redirectLoginTokenExp = () => {
  return {
    type: Actions.REDIRECT_LOGIN_TOKEN_EXP,
  };
};

export const userLogin = payload => {
  return {
    type: Actions.USER_LOGIN,
    payload,
  };
};

export const userLoginSuccess = payload => {
  return {
    type: Actions.USER_LOGIN_SUCCESS,
    payload,
  };
};

export const userLoginError = payload => {
  return {
    type: Actions.USER_LOGIN_ERROR,
    payload,
  };
};

export const userLogout = payload => {
  return {
    type: Actions.USER_LOGOUT,
    payload,
  };
};

// handler manager user
export const getListUser = () => {
  return {
    type: Actions.GET_LIST_USER,
  };
};

export const getListUserSuccess = payload => ({
  type: Actions.GET_LIST_USER_SUCCESS,
  payload,
});

export const editUser = payload => ({
  type: Actions.EDIT_USER,
  payload,
});

export const addUser = payload => ({
  type: Actions.ADD_USER,
  payload,
});

export const editUserSuccess = payload => ({
  type: Actions.EDIT_USER_SUCCESS,
  payload,
});

export const sortDataUser = () => ({
  type: Actions.LIST_USER_BLOCK,
});

export const allDataUser = () => ({
  type: Actions.LIST_USER_ALL,
});

// handler skill

export const getListSkill = () => ({
  type: Actions.GET_LIST_SKILL,
});

export const getListSkillSuccess = payload => ({
  type: Actions.GET_LIST_SKILL_SUCCESS,
  payload,
});

// handler position
export const getListPosition = () => ({
  type: Actions.GET_LIST_POSITION,
});

export const getListPositionSuccess = payload => ({
  type: Actions.GET_LIST_POSITION_SUCCESS,
  payload,
});

// handler modal
export const showModal = () => ({
  type: Actions.SHOW_MODAL,
});

export const hideModal = () => ({
  type: Actions.HIDE_MODAL,
});

// hander address
export const getListAddress = () => ({
  type: Actions.GET_LIST_ADDRESS,
});

export const getListAddressSuccess = payload => ({
  type: Actions.GET_LIST_ADDRESS_SUCCESS,
  payload,
});
