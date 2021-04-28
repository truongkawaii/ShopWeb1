import { call, put, takeLatest } from 'redux-saga/effects';
import { Actions, getListPositionSuccess } from '../actions';
import TableService from '../../services/table.services';

function* getListPosition() {
  try {
    console.log('HHHHHHHHHHHHHHHHHHHHHHHHHH');
    const response = yield call(TableService.listPosition);
    console.log('response nè bạn ', response);

    yield put(getListPositionSuccess(response));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

// Handler Skills

export default function* positionSaga() {
  yield takeLatest(Actions.GET_LIST_POSITION, getListPosition);
}
