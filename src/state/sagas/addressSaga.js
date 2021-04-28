import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListAddressSuccess } from '../actions';
import TableService from '../../services/table.services';
// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchListAddress() {
  try {
    const listAddress = yield call(TableService.listAddress);
    yield put(getListAddressSuccess(listAddress));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// Handler Skills

export default function* addressSaga() {
  yield takeLatest(Actions.GET_LIST_ADDRESS, fetchListAddress);
}
