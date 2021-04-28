import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListUserSuccess } from '../actions';
import TableService from '../../services/table.services';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchAllCandidate() {
  try {
    const allCandidate = yield call(TableService.listCandidate);
    yield put({
      type: Actions.GET_DATA_CANDIDATE_SUCCESS,
      payload: allCandidate,
    });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// function* putDataCandidate(action) {
//   try {
//     console.log(action, 'action nè');
//     yield call(TableService.editCandidate, action.payload);

//     const allCandidate = yield call(TableService.listCandidate);
//     yield put({
//       type: Actions.GET_DATA_CANDIDATE_SUCCESS,
//       payload: allCandidate,
//     });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* postDataCandidate(action) {
//   try {
//     console.log(action, 'action nè');
//     yield call(TableService.addCandidate, action.payload);

//     const allCandidate = yield call(TableService.listCandidate);
//     yield put({
//       type: Actions.GET_DATA_CANDIDATE_SUCCESS,
//       payload: allCandidate,
//     });
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// function* deleteDataCandidate(action) {
//   try {
//     yield call(TableService.deleteCandidate, action.payload);
//     const allCandidate = yield call(TableService.listCandidate);
//     yield put(getDataSuccess(allCandidate));
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message });
//   }
// }

// Handler Admin
function* fetchListUser() {
  try {
    const response = yield call(TableService.listUser);
    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* handlerEditUser(action) {
  try {
    yield call(TableService.editUser, action.payload);
    const response = yield call(TableService.listUser, action.payload);
    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* handlerAddUser(action) {
  try {
    yield call(TableService.addUser, action.payload);
    const response = yield call(TableService.listUser, action.payload);
    yield put(getListUserSuccess(response.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// Handler Skills

export default function* adminSaga() {
  // yield takeLatest(Actions.GET_DATA_CANDIDATE, fetchAllCandidate);
  yield takeLatest(Actions.GET_LIST_USER, fetchListUser);
  yield takeLatest(Actions.ADD_USER, handlerAddUser);
  yield takeLatest(Actions.EDIT_USER, handlerEditUser);
}
